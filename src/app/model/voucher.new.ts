import { GlobalText } from '../../texts/global';
import { NumberModelField } from './CustomModel/number-model-field';
import { CustomModel } from './CustomModel/custom-model';
// import { Vendors } from './vendors'; // change with new
import { BooleanModelField } from './CustomModel/boolan-model-field';
import { TextModelField } from './CustomModel/text-model-field';
import { ObjectModelField } from './CustomModel/object-model-field';
import { DateModelField } from './CustomModel/date-model-field';

export class Voucher extends CustomModel {

    title = GlobalText.TEXTS.voucher;

    public fields = {
        id: new NumberModelField(
            {
              // Never displayed
            },
        ),
        // before, was used as booklet code string
        // booklet: new ObjectModelField<Booklet>({
        //     title: GlobalText.TEXTS.model_booklet,
        // }),
        // // before, was used as vendor (name ?) string
        // vendor: new ObjectModelField<Vendors>({
        //     title: GlobalText.TEXTS.model_vendor,

        // }),
        usedAt: new DateModelField({
            title: GlobalText.TEXTS.model_used,

        }),
        code: new TextModelField({
            title:  GlobalText.TEXTS.model_code,
        }),
        value: new NumberModelField({

        })
    };

    public static apiToModel(voucherFromApi: any): Voucher {
        const newVoucher = new Voucher();
        newVoucher.set('id', voucherFromApi.id);
        // newVoucher.set('booklet', voucherFromApi.booklet ? Booklet.apiToModel(voucherFromApi.booklet) : null);
        // newVoucher.set('vendor', Vendor.apiToModel(voucherFromApi.vendor));
        newVoucher.set('usedAt', voucherFromApi.used_at);
        newVoucher.set('code', voucherFromApi.code);
        newVoucher.set('value', voucherFromApi.value);

        return newVoucher;
    }
}
