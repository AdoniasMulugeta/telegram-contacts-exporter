const {expect} = require('chai')
const {formatPhoneNumber} = require("./formatPhoneNumber");

describe('formatPhoneNumber tests', function () {
    it('should return number', function () {
        expect(formatPhoneNumber('251912345678')).to.be.equal('+251912345678')
        expect(formatPhoneNumber('912345678')).to.be.equal('+251912345678')
        expect(formatPhoneNumber('+251912345678')).to.be.equal('+251912345678')
        expect(formatPhoneNumber('0912345678')).to.be.equal('+251912345678')
    });
});