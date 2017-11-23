'use strict'
const fs = require('fs')
const fetch = require('node-fetch')

function fetchSchemaJSON (url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(result => result.data)
}

module.exports = fetchSchemaJSON
