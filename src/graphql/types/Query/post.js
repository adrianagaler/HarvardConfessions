const Post = require('../../../models/Post')
const User = require('../../../models/User')
const Comment = require('../../../models/Comment')

const postResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a post given its id.
  const post = await Post.query()
    .findById(args.id)
    .eager('comments')
  return post
}

const commentResolver = async (obj, args, context) => {
  const comment = await Comment.query().findById(args.id)
  return comment
}

const commentsResolver = async (obj, args, context) => {
  const comments = await Comment.query()
  return comments
}

const postsResolver = async (obj, args, context) => {
  /* TODO: Write a resolver which returns a list of all posts.
    - this list should be ordered with the most recent posts first 
  */
  const postlist = await Post.query().orderBy('createdAt')
  return postlist
}

const postuserResolver = async (obj, args, context) => {
  const user = await User.query.findById(obj.userId)
  return user
}

const resolver = {
  Query: {
    post: postResolver,
    posts: postsResolver,
    comment: commentResolver,
    comments: commentsResolver,
  },
  // Post: {
  //   user: postuserResolver,
  //   // comments: postResolver,
  // },
}

module.exports = resolver
