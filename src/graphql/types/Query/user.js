const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  const user = await User.query().where('id', args.id)
  return user[0]
}

const usersResolver = async (obj, args, context) => {
  const { substr } = args
  const users = await User.query()
  .modify(function(queryBuilder){
    if(substr) {
      queryBuilder.where(raw('lower("nickname")'), 'like', '%' + substr.toLowerCase() + '%')
    }
  })
  return users;
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
  },
}

module.exports = resolver
