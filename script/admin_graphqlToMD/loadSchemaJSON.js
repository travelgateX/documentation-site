'use strict'
const fs = require('fs')
const fetch = require('node-fetch')

function fetchSchemaJSON (url, body) {
  console.log("\n\n\n\n\n\n\nURL\n\n\n\n\n\n\n");
      console.log(url);
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      console.log("\n\n\n\n\n\n\nRES\n\n\n\n\n\n\n");
      console.log(res);
      res.json()})
    .then(result => {
      console.log("\n\n\n\n\n\n\nRESULT\n\n\n\n\n\n\n");
      console.log(result);
      result.data})
}

module.exports = fetchSchemaJSON
