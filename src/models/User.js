const BaseModel = require('./BaseModel')
const { HasManyRelation, ManyToManyRelation } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Post = require('./Post')
    const Follows = require('./Follows')
    const Comment = require('./Comment')
    return {
      posts: {
        relation: HasManyRelation,
        modeClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.userId',
        },
      },
      followers: {
        relation: ManyToManyRelation,
        modelClass: Follows,
        join: {
          from: 'follows.followingId',
          through: {
            from: 'follows.followingId',
            to: 'follows.followerId',
          },
          to: 'users.id',
        },
      },
      comments: {
        relation: HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'user.id',
          to: 'comments.author',
        },
      },
    }
  }
}

module.exports = User
