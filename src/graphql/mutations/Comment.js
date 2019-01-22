const Post = require('../../models/Post')


const createComment = async (obj, { content }, context) => {
    if (!context.user) {
        return {
            error: {
                message: 'You need to be logged in to comment',
            },
        }
    }
    
    const post = await Post.Query()
        .where('id', context.user.id)
        .then(res => res[0])

    if (!post) {
        return {
            error: {
                message: 'Post does not exist.'
            },
        }
    }

    const comment = await post.$relatedQuery('posts').insert({ content })

    if (!comment) {
        throw new Error ('Could not add comment!')
    }

    return {
        comment,
    }
}

const resolver = { Mutation : { createComment }}

module.exports = resolver