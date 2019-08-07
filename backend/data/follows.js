const casual = require('casual')

casual.define('follower', () => ({
  id: casual.uuid,
  follower: casual.uuid,
  following: casual.random_element([
    'Jovi',
    'Jada',
    'Diego',
    'Adriana',
    'Lara',
    'Milan',
    'Luke',
  ]),
}))

const follows = []

for (let i = 0; i < 15; i++) {
  follows.push(casual.follower)
}

module.exports = follows
