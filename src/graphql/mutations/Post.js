const User = require('../../models/User')

const createPost = async (obj, {input}, context) => {
  // if (!context.user) {
  //   return {
  //     error: {
  //       message: 'User not logged in',
  //     },
  //   }
  // }
  const { gif, content } = input
  console.log(gif)
  console.log(content)

  const user = await User.query()
    .where('id', context.user.id )
    .then(res => res[0])

  // if (!user) {
  //   return {
  //     error: {
  //       message: 'Logged in user does not exist',
  //     },
  //   }
  // }

  const post = await user.$relatedQuery('posts')
    .insertAndFetch({ content: content , gif: gif })

  if (!post) {
    throw new Error('Could not add post')
  }

  return {
    post: {
      id: post.id,
      content: post.content,
      userId: post.userId,
      gif: post.gif,
    }
  } 
}

const resolver = { Mutation: { createPost } }

module.exports = resolver
