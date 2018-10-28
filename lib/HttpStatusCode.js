module.exports = class HttpStatusCode {
    constructor({ value, description, reference }) {
        this.value = value;
        this.description = description;
        this.reference = reference;
    }

    static factory(csv) {
        const dequote = (str) => str.replace(/"/g, '');
        const firstCommaIndex = csv.indexOf(',');
        const secondCommaIndex = csv.indexOf(',', firstCommaIndex + 1);

        return new HttpStatusCode({
            value: parseInt(csv.slice(0, firstCommaIndex)),
            description: csv.slice(firstCommaIndex + 1, secondCommaIndex),
            reference: dequote(csv.slice(secondCommaIndex + 1))
        });
    }

    static notUnassigned(statusCode) {
        return statusCode.description !== 'Unassigned';
    }
}
