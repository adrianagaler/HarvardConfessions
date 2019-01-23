const Follows = require('../../../models/Follows')
const User = require('../../../models/User')
const { raw } = require('objection')

const userResolver = async (obj, args, context) => {
  const user = await User.query().where('id', args.id)
  return user[0]
}

const usersResolver = async (obj, args, context) => {
  const { substr } = args
  const users = await User.query().modify(queryBuilder => {
    if (substr) {
      queryBuilder.where(
        raw('lower("nickname")'),
        'like',
        `%${substr.toLowerCase()}%`,
      )
    }
  })
  return users
}

const followersResolver = async (obj, args, context) => {
  const follows = await Follows.query().modify(queryBuilder => {
    if (args.status) {
      queryBuilder.where('followerId', args.followerId)
    }
  })
  return follows
}

const followingResolver = async (obj, args, context) => {
  const follows = await Follows.query().modify(queryBuilder => {
    if (args.status) {
      queryBuilder.where('followerId', args.followingId)
    }
  })
  return follows
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
    followers: followersResolver,
    following: followingResolver,
  },
}

module.exports = resolver
