import { expect } from 'chai';

import * as ValidationUtil from './../../src/ValidationUtil';

describe('ValidationUtil', () => {
	describe('isString', () => {
    it('should return true, when a string value is passed in', () => {
      const result = ValidationUtil.isString('some string');
      expect(result).to.be.true;
    });
  });
});
