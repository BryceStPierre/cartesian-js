export default class Type
{
    static isNumber (v) {
        return Number.isFinite(v) && !isNaN(v) && !this.isString(v); 
    }
    
    static isString (v) {
        return typeof v === 'string';
    }

    static isArray (v) {
        return Array.isArray(v);
    }

    static isObject (v) {
        return typeof v === 'object' && v !== null;
    }

    static isNull (v) {
        return v === null;
    }
}