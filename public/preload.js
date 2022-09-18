const { existsSync, readFileSync, writeFileSync, mkdirSync } = require('fs')
const crypto = require('crypto')
const listener = require('clipboard-event')
const { clipboard } = require('electron')

window.exports = {
  utools,
  existsSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  crypto,
  listener,
  clipboard
}
