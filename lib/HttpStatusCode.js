module.exports = class HttpStatusCode {
    constructor({ value, description, reference }) {
        this.value = value;
        this.description = description;
        this.reference = reference;
    }

    static factory(csv) {
        const dequote = (str) => str.replace(/"/g, '');
        let insideDoubleQuote = false;
        const findUnquotedCommaIndices = (accumulator, character, index) => {
            if (!insideDoubleQuote && character === ',') return [...accumulator, index];

            if (character === '"') insideDoubleQuote = !insideDoubleQuote;

            return accumulator;
        };
        const [firstCommaIndex, secondCommaIndex] = [...csv].reduce(findUnquotedCommaIndices, []);

        return new HttpStatusCode({
            value: Number.parseInt(csv.slice(0, firstCommaIndex)),
            description: dequote(csv.slice(firstCommaIndex + 1, secondCommaIndex)),
            reference: dequote(csv.slice(secondCommaIndex + 1))
        });
    }

    static notUnassigned(statusCode) {
        return statusCode.description !== 'Unassigned';
    }
}
