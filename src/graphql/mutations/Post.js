const User = require('../../models/User')

const createPost = async (obj, { content }, context) => {
  // if (!context.user) {
  //   return {
  //     error: {
  //       message: 'User not logged in',
  //     },
  //   }
  // }
  const user = await User.query()
    .where('id', "d6dec27d-7606-44e0-9d6d-ad92cf7a4c94")
    .then(res => res[0])

  // if (!user) {
  //   return {
  //     error: {
  //       message: 'Logged in user does not exist',
  //     },
  //   }
  // }

  const post = await user.$relatedQuery('posts').insertAndFetch({ content })

  if (!post) {
    throw new Error('Could not add post')
  }

  return {
    post: {
      id: post.id,
      content: post.content,
      userId: post.userId
    }
  } 
}


const resolver = { Mutation: { createPost } }

module.exports = resolver
