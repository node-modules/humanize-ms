import { strict as assert } from 'node:assert';
import { ms } from '../src/index.js';

describe('humanize-ms', () => {
  describe('when number', () => {
    it('should not transform', () => {
      assert.equal(ms(1000), 1000);
    });
  });

  describe('when string', () => {
    it('should transform to number', () => {
      assert.equal(ms('1s'), 1000);
      assert.equal(ms('1m'), 60000);
      assert.equal(ms('1'), 1);
    });
  });

  describe('when invalid string', () => {
    it('should return undefined and warn', () => {
      assert.equal(ms('s'), undefined);
    });
  });
});
