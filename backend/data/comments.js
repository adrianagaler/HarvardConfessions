const casual = require('casual')

casual.define('comment', () => ({
  id: casual.uuid,
  content: casual.random_element([
    'I am cool ',
    'Me too',
    'Harvard sucks',
    'Trust me',
    'Make america great again',
    'candidate for presidency',
    'david malan is a genius',
  ]),
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

const comments = []

for (let i = 0; i < 15; i++) {
  comments.push(casual.comment)
}

module.exports = comments
