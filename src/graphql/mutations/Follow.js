const Follows = require('../../models/Follows')
const User = require('../../models/User')

const createFollow = async (obj, { input }, context) => {
  const followingId = input
  const user = await User.query()
    .where('id', context.user.id)
    .then(res => res[0])

  if (!user) {
    return {
      error: {
        message: 'You must be logged in to begin following.',
      },
    }
  }
  const test = await Follows.query()
    .where('followerId', context.user.id)
    .andWhere('followingId', followingId)
  if (test.length || followingId === context.user.id) {
    return {
      error: {
        message:
          'You are either following this user and/or you cannot follow yourself',
      },
    }
  }
  const follow = await Follows.query().insertAndFetch({
    followerId: context.user.id,
    followingId,
  })
  return {
    follow: {
      id: follow.id,
      followerId: context.user.id,
      followingId,
    },
  }
}

const resolver = { Mutation: { createFollow } }

module.exports = resolver
