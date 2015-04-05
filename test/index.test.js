/*!
 * humanize-ms - test/index.test.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var ms = require('..');

describe('humanize-ms', function () {
  describe('when number', function () {
    it('should not transform', function () {
      ms(1000).should.equal(1000);
    });
  });

  describe('when string', function () {
    it('should transform to number', function () {
      ms('1s').should.equal(1000);
      ms('1m').should.equal(60000);
      ms('1').should.equal(1);
    });
  });

  describe('when invalid string', function () {
    it('should return undefined and warn', function () {
      (ms('s') === undefined).should.be.ok;
    });
  });
});
