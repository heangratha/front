import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { URL_BMS_API } from '../../../environments/environment';
import { FinancialProvider } from './../../model/financial-provider';
import { CustomModelService } from './custom-model.service';
import { HttpService } from './http.service';


@Injectable({
    providedIn: 'root'
})
export class FinancialProviderService extends CustomModelService {
    readonly api = URL_BMS_API;
    customModelPath = 'financial/provider';

    constructor(protected http: HttpService) {
        super(http);
    }

    // Not expecting an Id here, as there is only one financial provider.
    public update(_id: number, body: object) {
        body['password'] = CryptoJS.SHA1(body['password']).toString(CryptoJS.enc.Base64);
        return this.http.post(this.makeUrl(), body);
    }

    fillWithOptions(financialProvider: FinancialProvider) {

    }
}
