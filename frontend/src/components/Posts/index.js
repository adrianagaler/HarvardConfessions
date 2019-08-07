import React, { Component } from 'react'
import TextArea from '../../components/TextArea'
import { Container, Text, Posttext } from './styles'
import { GlobalStyle, Header, Header2 } from './styles'

import gql from 'graphql-tag'
import { Mutation, graphql } from 'react-apollo'
import Input from '../Input'
import Button from '../Button/'
import { Link } from 'react-router-dom'

const ADD_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content) {
      post {
        content
      }
      error {
        message
      }
    }
  }
`
class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: {
        content: '',
      },
    }

    this.handleContent = this.handleContent.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleContent(e) {
    let value = e.target.value
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          name: value,
        },
      }),
      () => console.log(this.state.newPost.content),
    )
  }

  handleInput(e) {
    let value = e.target.value
    let name = e.target.name
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          [name]: value,
        },
      }),
      () => console.log(this.state.newPost),
    )
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Posttext>Write your post below!</Posttext>
        <form onSubmit={this.handleFormSubmit}>
          <TextArea>
            <Input
              inputType={'text'}
              name={'content'}
              value={this.state.newPost.content}
              handleChange={this.handleInput}
              placeholder={'Write your post below!'}
            />
          </TextArea>
          <Mutation
            mutation={ADD_POST}
            variables={{ content: this.state.newPost }}
            onCompleted={data => {
              if (!data) {
                alert(data.error.message)
              }
            }}
          >
            {(addPost, { data }) => (
              <Link to="/newsfeed">
                <Button onClick={addPost} action={() => addPost()}>
                  Post
                </Button>
                <br />
              </Link>
            )}
          </Mutation>{' '}
        </form>
      </React.Fragment>
    )
  }
}

export default Posts
