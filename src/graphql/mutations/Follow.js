const User = require ('../../models/User')
const Follows = require ('../../models/Follows')

const createFollow = async (obj, { input }, context) => {
    if (!context.user) {
        return {
            error: {
                message: 'User not logged in',
            },
        }
    }

    const user = await User.query()
        .where('id', context.user.id)
        .then(res => res[0])
    
    if (!user) {
        return {
            error: {
                message: 'You must be logged in to begin following.'
            },
        }
    }

    const follow = await user.$relatedQuery('follows').insert({ input.id })

    if (!follow) {
        throw new Error('Could not follow.')
    }

    return {
        follow,
    }
}

const resolver = { Mutation: { createFollow } }

module.exports = resolver