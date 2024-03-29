
import { CustomModel } from 'src/app/models/custom-models/custom-model';
import { AppInjector } from '../app-injector';
import { CountriesService } from '../core/countries/countries.service';
import { Commodity } from './commodity';
import { Criteria } from './criteria';
import { BooleanModelField } from './custom-models/boolan-model-field';
import { DateModelField } from './custom-models/date-model-field';
import { MultipleObjectsModelField } from './custom-models/multiple-object-model-field';
import { NestedFieldModelField } from './custom-models/nested-field';
import { NumberModelField } from './custom-models/number-model-field';
import { ObjectModelField } from './custom-models/object-model-field';
import { SingleSelectModelField } from './custom-models/single-select-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { DistributionBeneficiary } from './distribution-beneficiary';
import { Location } from './location';
import { Project } from './project';
export class DistributionType extends CustomModel {

    public fields = {
        name: new TextModelField({}),
        id: new TextModelField({})
    };

    constructor(id: string, name: string) {
        super();
        this.set('id', id);
        this.set('name', name);
    }
}
export class Distribution extends CustomModel {

    constructor() {
        super();
    }

    matSortActive = 'date';
    title = this.language.distribution;

    protected countryService = AppInjector.get(CountriesService);
    protected country = this.countryService.selectedCountry.get<string>('id') ?
        this.countryService.selectedCountry.get<string>('id') :
        this.countryService.khm.get<string>('id');

    public fields = {
        id: new NumberModelField(
            {
                title: this.language.distribution_id,
                isDisplayedInTable: true,
            }
        ),
        name: new TextModelField(
            {
                title: this.language.name,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isRequired: true,
                isSettable: true,
            }
        ),
        location: new ObjectModelField<Location>(
            {
                title: this.language.location,
                isDisplayedInTable: true,
                isDisplayedInModal: true,
                isDisplayedInSummary: true,
                displayTableFunction: null,
                displayModalFunction: null,
                tooltip: null,
            }
        ),
        distributionBeneficiaries: new MultipleObjectsModelField<DistributionBeneficiary>(
            {
                title: this.language.beneficiaries,
                isDisplayedInTable: true,
                displayTableFunction: null,
                isDisplayedInSummary: true,
                value: [],
            }
        ),
        date: new DateModelField(
            {
                title: this.language.distribution_date,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isDisplayedInSummary: true,
                isRequired: true,
                isSettable: true,
                isEditable: true,
            }
        ),
        project: new ObjectModelField<Project>(
            {
                title: this.language.project,
                displayTableFunction: null,
                isDisplayedInSummary: true,
                value: [],
            }
        ),

        // We need this field when we want to create a distribution in a precise project
        projectId: new NumberModelField(
            {
                title: this.language.project
            }
        ),
        selectionCriteria: new MultipleObjectsModelField<Criteria>(
            {

            }
        ),
        type: new SingleSelectModelField(
            {
                title: this.language.distribution_type,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isDisplayedInSummary: true,
                isRequired: true,
                isSettable: true,
                options: [new DistributionType('0', this.language.households), new DistributionType('1', this.language.individual)],
                bindField: 'name',
                apiLabel: 'id',
                value: new DistributionType('0', this.language.households),
            }
        ),
        commodities: new MultipleObjectsModelField<Commodity>(
            {
                title: this.language.commodity,
                isDisplayedInTable: true,
                isImageInTable: true,
                isDisplayedInSummary: true,
                value: [],
                displayTableFunction: null,
            }
        ),
        validated: new BooleanModelField(
            {
                // Not displayed anywhere but used as a condition
            }
        ),
        threshold: new NumberModelField(
            {
                value: 1,
            }
        ),
        finished: new BooleanModelField(
            {
                // Not displayed anywhere but used as a condition
            }
        ),
        updatedOn: new DateModelField({
            // Only displayed in the distribution component title
        }),
        adm1: new NestedFieldModelField({
            title: this.language.adm1[this.country],
            isDisplayedInModal: true,
            childrenObject: 'location',
            childrenFieldName: 'adm1',
        }),
        adm2: new NestedFieldModelField({
            title: this.language.adm2[this.country],
            isDisplayedInModal: true,
            childrenObject: 'location',
            childrenFieldName: 'adm2',
        }),
        adm3: new NestedFieldModelField({
            title: this.language.adm3[this.country],
            isDisplayedInModal: true,
            childrenObject: 'location',
            childrenFieldName: 'adm3',
        }),
        adm4: new NestedFieldModelField({
            title: this.language.adm4[this.country],
            isDisplayedInModal: true,
            childrenObject: 'location',
            childrenFieldName: 'adm4',
        }),
    };

    public static apiToModel(distributionFromApi: any): Distribution {
        const newDistribution = new Distribution();

        // Assign default fields
        newDistribution.set('id', distributionFromApi.id);
        newDistribution.set('date', DateModelField.formatFromApi(distributionFromApi.date_distribution));

        newDistribution.set('type', distributionFromApi.type >= 0 ?
            newDistribution.getOptions('type').filter(
                (option: DistributionType) => distributionFromApi.type.toString() === option.get('id'))[0] :
            null);

        newDistribution.set('name', distributionFromApi.name);
        newDistribution.set('validated', distributionFromApi.validated);
        newDistribution.set('location', distributionFromApi.location ? Location.apiToModel(distributionFromApi.location) : null);
        newDistribution.set('project', distributionFromApi.project ? Project.apiToModel(distributionFromApi.project) : null);

        newDistribution.fields.location.tooltip = (value: Location) => value.getLocationName();
        newDistribution.fields.location.displayTableFunction = (value: Location) => value.getPreciseLocationName();
        newDistribution.fields.location.displayModalFunction = value => value.getLocationName();
        newDistribution.fields.distributionBeneficiaries.displayTableFunction = value => value.length;
        newDistribution.fields.commodities.displayTableFunction = value => value;
        newDistribution.fields.project.displayTableFunction = (value: Project) => value.get('name');

        newDistribution.set('commodities',
            distributionFromApi.commodities ?
                distributionFromApi.commodities.map((commodity: any) => Commodity.apiToModel(commodity)) :
                null);

        newDistribution.set('selectionCriteria', distributionFromApi.selection_criteria ?
            distributionFromApi.selection_criteria.map((criteria: any) => Criteria.apiToModel(criteria)) :
            []);

        newDistribution.set('finished', distributionFromApi.completed);

        if (distributionFromApi.distribution_beneficiaries) {
            newDistribution.set('distributionBeneficiaries',
                distributionFromApi.distribution_beneficiaries
                    .map((distributionBeneficiary: any) =>
                        DistributionBeneficiary.apiToModel(distributionBeneficiary, distributionFromApi.id)));
        }

        newDistribution.set('updatedOn', DateModelField.formatDateTimeFromApi(distributionFromApi.updated_on));

        return newDistribution;
    }

    public modelToApi(): Object {

        const commodities = this.get('commodities') ?
            this.get<Commodity[]>('commodities').map(commodity => commodity.modelToApi()) :
            [];
        const project = { id: this.get('projectId') };
        const selectionCriteria = this.get('selectionCriteria') ?
            this.get<Criteria[]>('selectionCriteria').map(criteria => criteria.modelToApi()) :
            [];

        return {
            id: this.fields.id.formatForApi(),
            commodities: commodities,
            date_distribution: this.fields.date.formatForApi(),
            finished: false,
            location: this.fields.location.formatForApi(),
            name: this.fields.name.formatForApi(),
            project: project,
            selection_criteria: selectionCriteria,
            threshold: this.fields.threshold.formatForApi(),
            type: this.fields.type.formatForApi(),
            distribution_beneficiaries: this.fields.distributionBeneficiaries.formatForApi(),
            validated: this.fields.validated.formatForApi()
        };

    }

    public getIdentifyingName() {
        return this.get<string>('name');
    }

    // In modelToAPi put date.toLocaleDateString()
}
