'use strict'

var chord = require('chord.dictionary')
var names = chord.names
var aliases = chord.aliases

/**
 * Given a list of notes get the chord names
 *
 * @name chord.names
 * @function
 * @param {String|Array} notes - the chord notes
 * @return {Array} an array of chord names or all known chord names if no arguments provided
 *
 * @example
 * var chord = require('music.chord')
 * chord.names() // => ['Maj7', 'm7', ... ] (109 names)
 * chord.names(true) // => [ ]
 */
module.exports = function (a) {
  return a ? aliases.slice() : names.slice()
}
