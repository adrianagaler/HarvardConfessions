const BaseModel = require('./BaseModel')
const { HasManyRelation, ManyToManyRelation } = require('objection')

class Users extends BaseModel {
    static get tableName(){
        return 'users';
    }
}
    static get relationMappings() {
        const Post = require('./Post');
        const Follows = require('./Follows');
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
                    to: 'follows.followerId',
                }
                to: 'users.id',
            },s
        },
    }
}

module.exports = User
