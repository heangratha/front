import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { ModalConfirmationComponent } from 'src/app/components/modals/modal-confirmation/modal-confirmation.component';
import { BeneficiariesService } from 'src/app/core/api/beneficiaries.service';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { UserService } from 'src/app/core/api/user.service';
import { LanguageService } from 'src/app/core/language/language.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { NetworkService } from 'src/app/core/network/network.service';
import { ScreenSizeService } from 'src/app/core/screen-size/screen-size.service';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';
import { ModalService } from 'src/app/core/utils/modal.service';
import { Commodity } from 'src/app/models/commodity';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { Distribution } from 'src/app/models/distribution';
import { DistributionBeneficiary } from 'src/app/models/distribution-beneficiary';
import { User } from 'src/app/models/user';

@Component({
    template: '',
    styleUrls: ['./validated-distribution.component.scss']
})
export class ValidatedDistributionComponent implements OnInit, OnDestroy {

    entity: any;
    loadingExport = false;
    loadingTransaction = false;
    modalSubscriptions: Array<Subscription> = [];
    transacting = false;
    selection: SelectionModel<any>;
    extensionType = 'xls';
    progression = 0;
    interval: NodeJS.Timer;
    loadingComplete = false;

    // Transaction.
    readonly SENDING_CODE_FREQ = 10000; // ms
    lastCodeSentTime = 0; // ms
    actualUser = new User();
    chartAccepted = false;

    // distributionIsStored = false;
    distributionId: number;

    @Input() actualDistribution: Distribution;
    transactionData: MatTableDataSource<any>;
    @Input() loaderCache = false;
    @Input() distributionIsStored: boolean;

    @Output() storeEmitter: EventEmitter<Distribution> = new EventEmitter();
    @Output() finishedEmitter: EventEmitter<any> = new EventEmitter();
    @Output() hideSnackEmitter = new EventEmitter<Distribution>();

    // Screen size
    public currentDisplayType: DisplayType;
    private screenSizeSubscription: Subscription;

    // Language
    public language = this.languageService.selectedLanguage ? this.languageService.selectedLanguage : this.languageService.english ;

    constructor(
        protected distributionService: DistributionService,
        public snackbar: SnackbarService,
        public dialog: MatDialog,
        protected cacheService: AsyncacheService,
        protected modalService: ModalService,
        public beneficiariesService: BeneficiariesService,
        public _cacheService: AsyncacheService,
        public userService: UserService,
        public languageService: LanguageService,
        private screenSizeService: ScreenSizeService,
        public networkService: NetworkService,
    ) { }

    ngOnInit() {
        this.screenSizeSubscription = this.screenSizeService.displayTypeSource.subscribe((displayType: DisplayType) => {
            this.currentDisplayType = displayType;
        });
        this.distributionId = this.actualDistribution.get<number>('id');
        this.getDistributionBeneficiaries();
    }

    ngOnDestroy() {
        this.screenSizeSubscription.unsubscribe();
        this.modalSubscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    /**
     * Verify if modifications have been made to prevent the user from leaving and display dialog to confirm we wiwhes to delete them
     */
    @HostListener('window:beforeunload')
    canDeactivate(): Observable<boolean> | boolean {
        if (this.transacting) {
            const dialogRef = this.dialog.open(ModalConfirmationComponent, {
                data: {
                    title: this.language.modal_leave,
                    sentence: this.language.modal_leave_sentence,
                    ok: this.language.modal_leave
                }
            });

            return dialogRef.afterClosed();
        } else {
            return (true);
        }
    }

        /**
     * Gets the Beneficiaries of the actual distribution to display the table
     */
    getDistributionBeneficiaries() {
        this.loadingTransaction = true;
        this.distributionService.getBeneficiaries(this.actualDistribution.get('id'))
            .subscribe(distributionBeneficiaries => {
                if (!distributionBeneficiaries) {
                    this.getDistributionBeneficiariesFromCache();

                } else {
                    this.setDistributionBeneficiaries(distributionBeneficiaries);
                    this.formatTransactionTable();
                }
            });
    }

    formatTransactionTable() {
        throw new Error('Abstract Method');
    }

    setDistributionBeneficiaries(distributionBeneficiaries: any) {
        throw new Error('Abstract Method');
    }

    getDistributionBeneficiariesFromCache() {
        this.cacheService.get(AsyncacheService.DISTRIBUTIONS + '_' + this.actualDistribution.get('id') + '_beneficiaries')
            .subscribe((distribution) => {
                if (distribution) {
                    this.setDistributionBeneficiaries(distribution.distribution_beneficiaries);
                    this.formatTransactionTable();
                }
            });
    }

    /**
     * To be used everytime transactionData changes
     */
    verifyIsFinished() {
        throw new Error('Abstract Method');
    }

    storeBeneficiaries() {
        this.storeEmitter.emit(this.actualDistribution);
    }


    /**
     * Requests back-end a file containing informations about the transaction
     */
    exportTransaction(fileType: string, distributionType: string) {

        this.dialog.closeAll();
        this.loadingExport = true;
        this.distributionService.export(distributionType, fileType, this.actualDistribution.get('id')).subscribe(
            () => {this.loadingExport = false; },
            (_error: any) => {this.loadingExport = false; }
        );
    }


    getReceivedValue(commodity: Commodity): number {
        let amountReceived = 0;
        for (const distributionBeneficiary of this.transactionData.data) {
            amountReceived += this.getCommodityReceivedAmountFromBeneficiary(commodity, distributionBeneficiary);
        }
        return amountReceived;
    }

    getPercentageValue(commodity: Commodity): number {
        const percentage = (this.getAmountSent(commodity) / this.getTotalCommodityValue(commodity) * 100);
        return Math.round(percentage * 100) / 100;
    }

    getAmountSent(commodity: Commodity): number {
        let amountSent = 0;
        for (const distributionBeneficiary of this.transactionData.data) {
            amountSent += this.getCommoditySentAmountFromBeneficiary(commodity, distributionBeneficiary);
        }
        return amountSent;
    }

    getTotalCommodityValue(commodity: Commodity): number {
        return this.transactionData.data.length * commodity.get<number>('value');
    }

    // Abstract
    getCommoditySentAmountFromBeneficiary(commodity: Commodity, beneficiary: DistributionBeneficiary): number {
        throw new Error('Abstract Method');
    }

    // Abstract
    getCommodityReceivedAmountFromBeneficiary(commodity: Commodity, beneficiary: DistributionBeneficiary): number {
        throw new Error('Abstract Method');
    }

    // Here actualBeneficiary is of one of the children types of DistributionBeneficiary
    setTransactionMessage(beneficiaryFromApi: any, actualBeneficiary: any) {

        actualBeneficiary.set('message',
            beneficiaryFromApi.transactions[beneficiaryFromApi.transactions.length - 1].message ?
            beneficiaryFromApi.transactions[beneficiaryFromApi.transactions.length - 1].message :
            '');
        return actualBeneficiary;
    }

    exit(message: string) {
        this.snackbar.info(message);
        this.dialog.closeAll();
    }

    complete() {
        const dialogRef = this.dialog.open(ModalConfirmationComponent, {
            data: {
                title: this.language.close,
                sentence: this.language.modal_complete_distribution,
                ok: this.language.close
            }
        });

        dialogRef.afterClosed().subscribe((answer: boolean) => {
            if (answer) {
                this.loadingComplete = true;
                this.distributionService.complete(this.actualDistribution.get('id')).subscribe((_res: any) => {
                    this.loadingComplete = false;
                    this.actualDistribution.set('finished', true);
                    this.snackbar.success(this.language.distribution_succes_completed);
                }, err => {
                    this.loadingComplete = false;
                });
            }
        });
    }

}
