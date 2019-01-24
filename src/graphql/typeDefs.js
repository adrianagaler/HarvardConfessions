const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(substr: String): [User!]
    post(id: ID!): Post!
    posts: [Post!]
    comments(postId: ID!): [Comment]
    following(id: ID!): [Follow]
    followers(id: ID!): [Follow]
  }

  type Mutation {
    createUser(input: CreateUserInput!): LoginReturn!
    createPost(input: CreatePostInput!): CreatePostReturn!
    loginUser(email: String!, password: String!): LoginReturn!
    createComment(input: CreateCommentInput!): CreateCommentReturn!
    createFollow(input: CreateFollowInput!): CreateFollowReturn!
  }

  input CreatePostInput {
    content: String!
    gif: String
  }

  type CreatePostReturn {
    post: Post
    error: Error
  }

  type CreateCommentReturn {
    comment: Comment
    error: Error
  }
  input CreateCommentInput {
    postId: ID!
    author: ID!
    content: String!
  }
  input CreateFollowInput {
    followingId: ID!
  }

  type CreateFollowReturn {
    follow: Follow
    error: Error
  }
  input CreateUserInput {
    nickname: String!
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
    gif: String
    user: User
    comments: [Comment]
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
