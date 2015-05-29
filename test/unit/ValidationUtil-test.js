import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import * as ValidationUtil from './../../src/ValidationUtil';

chai.use(chaiAsPromised);
chai.use(sinonChai);

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

  describe('testPromise', () => {
    beforeEach(() => {
      sinon.stub(ValidationUtil, 'isString');
    });

    afterEach(() => {
      ValidationUtil.isString.restore();
    });

    it('should resolve promise when stub returns true', () => {
      ValidationUtil.isString.returns(true);

      // Passing number just to prove that our functionality is stubbed.
      return ValidationUtil.isStringPromise(7)
      .then(result => {
        expect(result).to.be.true;
        expect(ValidationUtil.isString).to.have.been.calledWith(7);
        expect(ValidationUtil.isString).to.have.been.calledOnce;
      });
    });

    it('should reject promise when stub returns false', () => {
      ValidationUtil.isString.returns(false);

      // Passing string just to prove that our functionality is stubbed.
      return ValidationUtil.isStringPromise('some string')
      .catch(result => {
        expect(result).to.be.false;
        expect(ValidationUtil.isString).to.have.been.calledWith('some string');
        expect(ValidationUtil.isString).to.have.been.calledOnce;
      });
    });
  });

  describe('meta-testing', () => {
    const testCases = [
      {expectedValue: true, testValue: 'some string'},
      {expectedValue: false, testValue: 7},
      {expectedValue: false, testValue: true},
      {expectedValue: false, testValue: null},
      {expectedValue: false, testValue: undefined},
      {expectedValue: false, testValue: {}},
      {expectedValue: false, testValue: () => {}},
      {expectedValue: false, testValue: Symbol()},
    ];

    testCases.forEach(testCase => {
      it(`should return ${testCase.expectedValue}, for parameter of type ${typeof testCase.testValue}`, () => {
        expect(ValidationUtil.isString(testCase.testValue)).to.equal(testCase.expectedValue);
      });
    });
  });
});
