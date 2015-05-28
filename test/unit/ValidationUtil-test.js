import { expect } from 'chai';

import * as ValidationUtil from './../../src/ValidationUtil';

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
      return ValidationUtil.isStringPromise('some string');
    });
  });
});
