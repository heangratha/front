import { CustomModel } from './custom-models/custom-model';
import { Beneficiary } from './beneficiary';
import { ObjectModelField } from './custom-models/object-model-field';

export class DistributionBeneficiary extends CustomModel {
    public fields = {
        beneficiary: new ObjectModelField<Beneficiary>(
            {
                value: null
            }
        )
    };

    public static apiToModel(distributionBeneficiaryFromApi, distributionId: number): DistributionBeneficiary {
        const newDistributionBeneficiary = new DistributionBeneficiary();
        if (Object.keys(distributionBeneficiaryFromApi.beneficiary ).length > 0) {
            const beneficiary = Beneficiary.apiToModel(distributionBeneficiaryFromApi.beneficiary);
            beneficiary.set('distributionId', distributionId);
            newDistributionBeneficiary.set('beneficiary', beneficiary);
        }

        return newDistributionBeneficiary;
    }

    public modelToApi(): Object {

        return {
           id: this.get('id'),
           beneficiary:  this.get('beneficiary') ? this.get('beneficiary').modelToApi() : null,
       };

    }
}
