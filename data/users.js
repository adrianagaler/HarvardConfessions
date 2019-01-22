const casual = require('casual')

casual.define('user', nickname => ({
  id: casual.uuid,
  email: casual.email,
  nickname,
  password: casual.password,
  house: casual.random_element([
    'DUnster',
    'Adams',
    'Leverett',
    'Winthrop',
    'Quad',
  ]),
}))

const nicknames = ['Jovi', 'Jada', 'Diego', 'Adriana', 'Lara', 'Milan', 'Luke']

const users = nicknames.map(nickname => casual.user(nickname))

module.exports = users
