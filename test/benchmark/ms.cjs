const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const originMS = require('ms');
const { ms } = require('../..');

const suite = new Benchmark.Suite();

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
  .on('cycle', function(event) {
    benchmarks.add(event.target);
  })
  .on('start', function() {
    console.log('\n  node version: %s, date: %s\n  Starting...', process.version, Date());
  })
  .on('complete', function() {
    benchmarks.log();
  })
// run async
  .run({ async: false });

// node version: v14.21.3, date: Thu Dec 12 2024 15:21:24 GMT+0800 (中国标准时间)
// Starting...
// 3 tests completed.

// origin ms() x     6,066,088 ops/sec ±0.87% (90 runs sampled)
// ms()        x     6,109,608 ops/sec ±0.47% (94 runs sampled)
// ms(1000)    x 1,071,677,064 ops/sec ±0.22% (92 runs sampled)
