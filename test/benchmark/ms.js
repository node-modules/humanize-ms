/**!
 * humanize-ms - test/benchmark/ms.js
 *
 * Copyright(c) node-modules and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var Benchmark = require('benchmark');
var benchmarks = require('beautify-benchmark');
var originMS = require('ms');
var ms = require('../..');

var suite = new Benchmark.Suite();

// add tests
suite

.add('origin ms()', function() {
  originMS('10s');
})
.add('ms()', function() {
  ms('10s');
})
.add('ms(1000)', function() {
  ms(1000);
})

// add listeners
.on('cycle', function (event) {
  benchmarks.add(event.target);
})
.on('start', function () {
  console.log('\n  node version: %s, date: %s\n  Starting...', process.version, Date());
})
.on('complete', function() {
  benchmarks.log();
})
// run async
.run({ 'async': false });

// node version: v1.6.3, date: Mon Apr 06 2015 11:59:04 GMT+0800 (CST)
//   Starting...
//   3 tests completed.
//
//   origin ms() x  3,393,695 ops/sec ±1.30% (92 runs sampled)
//   ms()        x  3,430,360 ops/sec ±1.05% (90 runs sampled)
//   ms(1000)    x 94,272,966 ops/sec ±1.11% (93 runs sampled)
