'use strict'

var names = require('tonal.dictionary/names')
var chords = require('./dictionary')

/**
 * Given a list of notes get the chord names
 *
 * @name chord.names
 * @function
 * @param {String|Array} notes - the chord notes
 * @return {Array} an array of chord names or all known chord names if no arguments provided
 *
 * @example
 * // get all known chord names
 * chord.names() // => ['Maj7', 'm7', ... ] (109 names)
 * chord.names('D E F G A B C') [ 'D dorian' ]
 * chord.names('D E F G A B C') [ 'D dorian' ]
 */
module.exports = names(chords, '')
