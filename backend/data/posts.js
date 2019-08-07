const casual = require('casual')

casual.define('post', () => ({
  id: casual.uuid,
  content: casual.sentences(2),
  nickname: casual.random_element([
    'Jovi',
    'Jada',
    'Diego',
    'Adriana',
    'Lara',
    'Milan',
    'Luke',
  ]),
}))

const posts = []

for (let i = 0; i < 15; i++) {
  posts.push(casual.post)
}

module.exports = posts
