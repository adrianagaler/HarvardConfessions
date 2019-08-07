import React, { Component } from 'react'

/* Import Components */

import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import Posts from '../../components/Posts'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      nickname
      email
      house
    }
  }
`
const GET_POST = gql`
  query posts {
    content
    userId
    gif
  }
`
const id = 'a738f5b3-ebbb-4bcf-93fd-ae6ae320d02e'

const UserInfo = () => (
  <Query query={GET_USER} variables={{ id: id }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading</div>
      console.log('ERROR', error)
      console.log('DATA', JSON.stringify(data))
      return (
        <div>
          <h1>{`User name: ${data.user.nickname}`}</h1>
          <h1>{`User school: ${data.user.house}`}</h1>
        </div>
      )
    }}
  </Query>
)
const PostInfo = () => (
  <Query query={GET_POST} variables={{}}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading</div>
      console.log('ERROR', error)
      console.log('DATA', JSON.stringify(data))
      return (
        <div>
          Posts
          <h1>{` ${data}`}</h1>
        </div>
      )
    }}
  </Query>
)

class MyProfile extends Component {
  render() {
    return (
      <div>
        <UserInfo />
        <PostInfo />
      </div>
    )
  }
}

export default MyProfile
