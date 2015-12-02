var vows = require('vows')
var assert = require('assert')
var names = require('..').names

vows.describe('chord.names').addBatch({
  'names': function () {
    assert(names().length > 100)
    assert(names(true).length > names().length)
  }
}).export(module)
