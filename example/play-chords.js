var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var chord = require('../')
var ctx = new window.AudioContext()
var soundfont = require('soundfont-player')(ctx)
var ready = false
var piano = soundfont.instrument('acoustic_grand_piano')
piano.onready(function (p) {
  ready = true
  console.log('piano!', p)
})

function playChord (type) {
  var notes = chord(type, 'c4')
  console.log(notes, ctx.currentTime)
  if (ready) {
    notes.forEach(function (note) {
      piano.play(note, ctx.currentTime, 1)
    })
  }
}

function renderChord (c) {
  var type = c.name
  var name = 'C' + type
  var click = function (e) { playChord(type); e.preventDefault() }
  return h('div', {}, [
    h('span', {}, ' ' + c.binary + ' - '),
    h('a', { href: '#', onclick: click }, name),
    h('span', {}, ' (' + c.intervals.join(' ') + ')')]
  )
}

function renderChords (chords) {
  return h('div', {}, [
    h('h1', {}, 'Chords'),
    chords.map(renderChord)
  ])
}

function render () {
  var chords = chord.dictionary.chords.sort(function (a, b) {
    return a.intervals.length - b.intervals.length
  })
  return renderChords(chords)
}

document.body.appendChild(createElement(render()))
