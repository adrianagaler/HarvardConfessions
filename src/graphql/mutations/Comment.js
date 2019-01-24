const Comment = require('../../models/Comment')

const createComment = async (obj, { input }, context) => {
  const { postId, content } = input

  if (!context.user) {
    return {
      error: {
        message: 'You need to be logged in to comment',
      },
    }
  }
  const author = context.user.id
  const comment = await Comment.query().insertAndFetch({
    postId,
    author,
    content,
  })

  if (!comment) {
    throw new Error('Could not add comment!')
  }

  return {
    comment: {
      id: comment.id,
      postId,
      author,
      content,
    },
  }
}

const resolver = { Mutation: { createComment } }

module.exports = resolver
