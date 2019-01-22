const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(substr: String): [User!]
    post(id: ID!): Post!
    posts: [Post!]
  }

  type Mutation {
    createUser(input: CreateUserInput!): LoginReturn!
    createPost(content: String!): CreatePostReturn!
    loginUser(email: String!, password: String!): LoginReturn!
    createComment(content: String!): CreateCommentReturn!
    createFollow(input: CreateFollowInput!): CreateFollowReturn!
  }

  type CreatePostReturn {
    post: Post
    error: Error
  }
  type CreateCommentReturn {
    comment: Comment
    error: Error
  }
  input CreateFollowInput {
    followerId: ID!
    followingId: ID!
  }

  type CreateFollowReturn {
    follow: Follow!
    error: Error
  }
  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    house: String
  }
  type Comment {
    id: ID!
    postId: ID!
    author: ID!
    content: String!
  }
  type Follow {
    id: ID!
    followerId: ID!
    followingId: ID!
  }

  type User {
    id: ID!
    nickname: String!
    email: String!
    house: String
  }

  type Post {
    id: ID!
    content: String!
    userId: String
  }

  type LoginReturn {
    user: User
    token: String
    error: Error
  }

  type Error {
    message: String
  }
`
