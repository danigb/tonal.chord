var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var chord = require('../')
var daccord = require('daccord')

var min = parseInt('100000000000', 2)
var max = parseInt('111111111111', 2)
var space = []
for (var i = min; i <= max; i++) { space.push(i.toString(2)) }

var cCount = 0
var dCount = 0
var chords = space.map(function (binary) {
  var data = chord.dictionary.by[binary]
  if (data) cCount++
  var d = data ? daccord(data.name) : ''
  // weird: if it fails, it returns an string
  if (d.join) dCount++
  return {
    binary: binary,
    name: data ? data.name : '',
    intervals: chord(binary, false),
    daccord: d.join ? d.join(' ') : ''
  }
})
console.log(cCount, dCount)

function renderChord (chord) {
  if (!chord.name && chord.daccord) console.log('ea!', chord)
  return h(chord.name ? 'h4' : 'div', { }, [
    chord.binary, ' ', chord.name,
    ' [', chord.intervals.join(' '), '] ',
    'daccord: ', chord.daccord
  ])
}

function render () {
  return h('div', {}, [
    h('h1', {}, 'Experimenting with daccord'),
    h('div', {}, chords.map(renderChord))
  ])
}

document.body.appendChild(createElement(render()))
