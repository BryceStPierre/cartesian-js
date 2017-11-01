export default class Type
{
    static isNumber (v) {
        try {
            if (Number.isFinite(v) && !isNaN(v) && typeof v !== 'string')
                return true;
            else
                throw 'NonNumberError';
        } catch (err) {
            console.log(err);
        }
    }
    
    static isString (v) {
        try {
            if (typeof v === 'string')
                return true;
            else
                throw 'NonStringError';
        } catch (err) {
            console.log(err);
        }
    }

    static isArray (v) {
        try {
            if (Array.isArray(v))
                return true;
            else
                throw 'NonArrayError';
        } catch (err) {
            console.log(err);
        }
    }

    static isObject (v) {
        try {
            if (typeof v === 'object' && v !== null)
                return true;
            else
                throw 'NonObjectError';
        } catch (err) {
            console.log(err);
        }
    }

    static isNull (v) {
        try {
            if (v === null || !v)
                return true;
            else
                throw 'NonNullError';
        } catch (err) {
            console.log(err);
        }
    }
}