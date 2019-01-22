const usersData = require('../../../data/users')
const postsData = require('../../../data/posts')
const followsData = require('../../../data/follows')
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

const createFollow = (knex, followobj, nickname) => {
  return knex('users')
    .where('nickname', nickname)
    .first()
    .then(user => {
      const { followerId, id } = followobj
      return knex('follows').insert({
        id,
        followerId,
        userId: user.id,
      })
    })
}

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
        createPost(knex, post, post.name),
      )
      return Promise.all(postsPromises)
    })
    .then(() => {
      const followsPromises = followsData.map(follow =>
        createFollow(knex, follow, follow.name),
      )
      return Promise.all(followsPromises)
    })
}
