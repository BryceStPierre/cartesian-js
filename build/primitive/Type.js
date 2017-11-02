export default class Type
{
    static isNumber (v) {
        return Number.isFinite(v) && !isNaN(v) && typeof v !== 'string';
    }
    
    static isString (v) {
        return typeof v === 'string';
    }

    static isBoolean (v) {
        return typeof v === 'boolean';
    }

    static isArray (v) {
        return Array.isArray(v);
    }

    static isObject (v) {
        return typeof v === 'object' && v !== null;
    }
}