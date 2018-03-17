const expect = require('chai').expect;

const cuitValidator = require('../src/cuit-validator');

describe('CUIT Validator', () => {
    it('should throw an error if cuit do not have correct format', () => {
        expect(() => { cuitValidator('2033899255') }).throw(Error);
        expect(() => { cuitValidator('20-3389925a-7') }).throw(Error);
        expect(() => { cuitValidator('20-33899255-7a') }).throw(Error);
    });

    it('should return false if cuit does not exist', () => {
        expect(cuitValidator('30-70712428-2')).to.equal(false);
    });

    it('should return true if cuit does exist', () => {
        expect(cuitValidator('20-14315108-6')).to.equal(true);
    });
});