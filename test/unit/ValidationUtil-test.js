import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import * as ValidationUtil from './../../src/ValidationUtil';

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('ValidationUtil', () => {
	describe('isString', () => {
    it('should return true, when a string value is passed in', () => {
      const result = ValidationUtil.isString('some string');
      expect(result).to.be.true;
    });
  });

  describe('isStringAsync', (done) => {
    it('should return true, when a string value is passed in', () => {
      ValidationUtil.isString('some string', result => {
        expect(result).to.be.true;
        done();
      });
    });
  });

  describe('isStringPromise', () => {
    it('should resolve when proper string is passed in', () => {
      return expect(ValidationUtil.isStringPromise('some string')).to.eventually.be.true;
    });

    it('should reject when number is passed in', () => {
      return expect(ValidationUtil.isStringPromise(7)).to.be.rejectedWith(false);
    });
  });
});
