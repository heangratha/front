import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MatDialogRef, MAT_DATE_FORMATS } from '@angular/material';
import { CriteriaService } from 'src/app/core/api/criteria.service';
import { FormService } from 'src/app/core/utils/form.service';
import { LanguageService } from 'src/app/core/language/language.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { APP_DATE_FORMATS, CustomDateAdapter } from 'src/app/shared/adapters/date.adapter';
import { Criteria, CriteriaCondition, CriteriaValue } from 'src/app/models/criteria';
import { Gender } from 'src/app/models/beneficiary';


@Component({
    selector: 'app-modal-add-criteria',
    templateUrl: './modal-add-criteria.component.html',
    styleUrls: [ '../modal-fields/modal-fields.component.scss', './modal-add-criteria.component.scss' ],
    providers: [
        { provide: DateAdapter, useClass: CustomDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
    ],
})
export class ModalAddCriteriaComponent implements OnInit {
    public criteria: Criteria;
    public fields: string[];
    public form: FormGroup;
    public displayWeight = false;
    public iconAdvanced = 'arrow_drop_down';

    criteriaList: Array<Criteria>;

   // Language
   public language = this.languageService.selectedLanguage ? this.languageService.selectedLanguage : this.languageService.english ;

    constructor(
        private criteriaService: CriteriaService,
        public modalReference: MatDialogRef<any>,
        private snackbar: SnackbarService,
        public formService: FormService,
        public languageService: LanguageService,
    ) {}

    ngOnInit() {
        this.criteria = new Criteria();
        this.fields = Object.keys(this.criteria.fields);
        this.makeForm();
        this.loadFields();
    }

    makeForm() {
        const formControls = {};
        this.fields.forEach((fieldName: string) => {
            const field = this.criteria.fields[fieldName];
            const validators = this.formService.getFieldValidators(field.isRequired, field.pattern);
            formControls[fieldName] = new FormControl(
                {
                    value: this.criteria.get(fieldName),
                    disabled: field.isDisabled
                },
                validators
            );
        });
        this.form = new FormGroup(formControls);
    }

    loadFields() {
        this.criteriaService.get().subscribe((criteria: any) => {
            this.criteriaList = criteria.map((criterion: any) => Criteria.apiToModel(criterion));
        });
    }

    loadConditions(fieldName) {
        if (fieldName) {
            this.criteriaService.fillConditionOptions(this.criteria, fieldName);
        }
        this.form.controls.condition.setValue(null);
        this.form.controls.value.setValue(null);
    }

    needsValue(field) {
        return ['gender', 'dateOfBirth', 'equityCardNo', 'IDPoor', 'headOfHouseholdDateOfBirth', 'headOfHouseholdGender'].includes(field);
    }

    /**
   * Function to change the value of the displayWeight variable
   * and the icon used
   */
    changeDisplay() {
        this.displayWeight = !this.displayWeight;
        this.iconAdvanced = this.displayWeight ? 'arrow_drop_up' : 'arrow_drop_down';
    }

    onCancel() {
        this.modalReference.close();
    }

    onSubmit() {
        // get the information about the field with the selected field name
        this.criteriaList.forEach((option: Criteria) => {
            if (option.get('field') === this.form.controls.field.value) {
                this.criteria.set('kindOfBeneficiary', option.get('kindOfBeneficiary'));
                this.criteria.set('tableString', option.get('tableString'));
                this.criteria.set('type', option.get('type'));
                this.criteria.set('field', option.get('field'));
            }
        });

        this.criteria.set(
            'condition',
            this.criteria.getOptions('condition').filter((option: CriteriaCondition) => {
                return option.get('name') === this.form.controls.condition.value;
            })[0]
        );
        const value = this.form.controls.value.value;
        if (this.form.controls.field.value === 'gender') {
            const genderValue = this.criteria.genders.filter((gender: Gender) => gender.get('id') === value)[0];
            this.criteria.set('value', new CriteriaValue(value, genderValue.get('name')));
        }
        // In case the criteria is the dateOfBirth
        else if (value instanceof Date) {
            const datePipe = new DatePipe('en-US');
            const formattedValue = datePipe.transform(value, 'yyyy-MM-dd');
            this.criteria.set('value', new CriteriaValue(formattedValue, formattedValue));
        } else {
            this.criteria.set('value', new CriteriaValue(value, value));
        }
        this.criteria.set('weight', this.form.controls.weight.value);


        if (
            (this.form.controls.field.value === 'gender' ||
                this.form.controls.field.value === 'dateOfBirth' ||
                this.form.controls.field.value === 'IDPoor' ||
                this.form.controls.field.value === 'equityCardNo') &&
            !this.form.controls.value.value
        ) {
            this.snackbar.error(this.language.modal_add_no_value);
        } else {
            this.modalReference.close(this.criteria);
        }
    }
}
