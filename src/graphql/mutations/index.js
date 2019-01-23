const merge = require('lodash.merge')

const auth = require('./Auth')
const user = require('./User')
const post = require('./Post')
const follow = require('./Follow')
const comment = require('./Comment')

const resolvers = [auth, user, post, follow, comment]

module.exports = merge(...resolvers)
