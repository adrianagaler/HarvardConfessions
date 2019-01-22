const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Comment extends BaseModel {
    static get tableName() {
        return 'comments'
    }

    static get relationMappings () {
        const Post = require('./Post');
        const User = require('./User');

        return {
            post: {
                relation: BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from : 'comments.postId'
                    to: 'posts.id'
                },
            },
            user: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'comments.author',
                    to: 'users.id'
                },
            },
        }
    }
}

module.exports = Comment 
