const usersData = require('../../../data/users')
const postsData = require('../../../data/posts')
// const followsData = require('../../../data/follows')
const commentsData = require('../../../data/comments')

const createPost = (knex, post, nickname) => {
  return knex('users')
    .where('nickname', nickname)
    .first()
    .then(user => {
      const { id, content } = post
      return knex('posts').insert({
        id,
        content,
        userId: user.id,
      })
    })
}

const createComment = (knex, commentObj, nickname) => {
  return knex('users')
    .where('nickname', nickname)
    .first()
    .then(user => {
      const { content, id } = commentObj
      return knex('comments').insert({
        id,
        content,
        author: user.id,
      })
    })
}

// const createFollow = (knex, followobj, nickname) => {
//   return knex('users')
//     .where('nickname', nickname)
//     .first()
//     .then(user => {
//       const { followingId, id } = followobj
//       return knex('users')
//         .where('id', id)
//         .first()
//         .then(user => {
//           return knex('follows').insert({
//             id,
//             followerId: user.id,
//             followingId,
//           })
//         })
//     })
// }

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => knex('follows').del())
    .then(() => knex('posts').del())
    .then(() => {
      return knex('users').insert(usersData)
    })
    .then(() => {
      const postsPromises = postsData.map(post =>
        createPost(knex, post, post.nickname),
      )
      return Promise.all(postsPromises)
    })
    .then(() => {
      const commentsPromises = commentsData.map(follow =>
        createComment(knex, follow, follow.nickname),
      )
      return Promise.all(commentsPromises)
    })
}
