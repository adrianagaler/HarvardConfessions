const config = require('./index');
const GphApiClient = require('giphy-js-sdk-core');

const giphy = GphApiClient(config.key)

let url_list = []

const test = giphy.search('gifs', {"q": "cats", "limit" : "10"})
  .then((response) => {
    response.data.forEach((gifObject) => {
      url_list.push(gifObject.embed_url)
    })
    console.log(url_list)
  })
  .catch((err) => {
  })


module.exports = { giphy }

