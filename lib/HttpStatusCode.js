module.exports = class HttpStatusCode {
    constructor({ value, description, reference }) {
        this.value = value;
        this.description = description;
        this.reference = reference;
    }

    static factory(csv) {
        const dequote = (str) => str.replace(/"/g, '');
        let fromIndex = NaN;
        let insideDoubleQuote = false;
        const findFirstUnquotedCommaIndex = (accumulator, character, index) => {
            if ((!Number.isNaN(accumulator)) || (!Number.isNaN(fromIndex) && index < fromIndex)) return accumulator;

            if (!insideDoubleQuote && character === ',') return index;

            if (character === '"') insideDoubleQuote = !insideDoubleQuote;

            return accumulator;
        };
        const firstCommaIndex = [...csv].reduce(findFirstUnquotedCommaIndex, NaN);
        fromIndex = firstCommaIndex + 1
        const secondCommaIndex = [...csv].reduce(findFirstUnquotedCommaIndex, NaN);

        return new HttpStatusCode({
            value: parseInt(csv.slice(0, firstCommaIndex)),
            description: dequote(csv.slice(firstCommaIndex + 1, secondCommaIndex)),
            reference: dequote(csv.slice(secondCommaIndex + 1))
        });
    }

    static notUnassigned(statusCode) {
        return statusCode.description !== 'Unassigned';
    }
}
