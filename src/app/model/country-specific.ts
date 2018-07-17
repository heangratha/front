import { SectorMapper } from "./sector-mapper";

export class CountrySpecific {
    static __classname__ = 'CountrySpecific';
    /**
     * CountrySpecific's id
     * @type {number}
     */
    id: number;
    /**
     * CountrySpecific's name
     * @type {string}
     */
    name: string = '';
    /**
     * CountrySpecific's field
     * @type {string}
     */
    field: string = '';
    /**
     * CountrySpecific's type
     * @type {string}
     */
    type: string = '';
    /**
     * CountrySpecific's countryIso3
     * @type {string}
     */
    countryIso3: string = '';

    constructor(instance?) {
        if (instance !== undefined) {
            this.id = instance.id;
            this.field = instance.field;
            this.type = instance.type;
            this.countryIso3 = instance.countryIso3;
            this.name = instance.name;
        }
    }

    mapAllProperties(selfinstance): Object {
        if (!selfinstance)
            return selfinstance;

        return {
            id: selfinstance.id,
            field: selfinstance.field,
            type: selfinstance.type,
            countryIso3: selfinstance.countryIso3,
            name: selfinstance.name,
        }
    }

    /**
    * return a CountrySpecific after formatting its properties
    */
    getMapper(selfinstance): Object {
        if (!selfinstance)
            return selfinstance;

        return {
            field: selfinstance.field,
            type: selfinstance.type,
        }
    }

    /**
    * return a CountrySpecific after formatting its properties for the modal details
    */
    getMapperDetails(selfinstance): Object {
        if (!selfinstance)
            return selfinstance;

        return {
            field: selfinstance.field,
            type: selfinstance.type,
        }
    }

    /**
     * return a CountrySpecific after formatting its properties for the modal add
     */
    getMapperAdd(selfinstance): Object {
        if (!selfinstance)
            return selfinstance;

        return {
            countryIso3: selfinstance.countryIso3,
            field: selfinstance.field,
            type: selfinstance.type,
        }
    }

    /**
    * return the type of CountrySpecific properties
    */
    getTypeProperties(selfinstance): Object {
        return {
            field: "text",
            type: "text",
        }
    }

    /**
    * return the type of CountrySpecific properties for modals
    */
    getModalTypeProperties(selfinstance): Object {
        return {
            field: "text",
            type: "text",
        }
    }

    /**
    * return CountrySpecific properties name displayed
    */
    static translator(): Object {
        return {
            field: "Field",
            type: "Type",
            countryIso3: "Country",
        }
    }

    public static formatArray(instance): CountrySpecific[] {
        let countrySpecific: CountrySpecific[] = [];
        instance.forEach(element => {
            countrySpecific.push(this.formatFromApiCountrySpecific(element));
        });
        return countrySpecific;
    }

    public static formatFromApiCountrySpecific(element: any): CountrySpecific {
        let countrySpecific = new CountrySpecific();
        countrySpecific.id = element.id;
        countrySpecific.field = element.field;
        countrySpecific.type = element.type;
        countrySpecific.countryIso3 = element.countryIso3;
        countrySpecific.name = element.field;

        return countrySpecific;
    }

    public static formatForApi(element: CountrySpecific): any {
        return new CountrySpecific(element);
    }
}