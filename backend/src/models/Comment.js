const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Comment extends BaseModel {
    static get tableName() {
        return 'comments'
    }

    static get relationMappings () {
        const Post = require('./Post');

        return {
            posts: {
                relation: BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from : 'comments.postId'
                    to: 'posts.id'
                },
            },
        }
    }
}

module.exports = Comment 
