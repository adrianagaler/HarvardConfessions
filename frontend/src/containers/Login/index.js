import React, { Component } from 'react'

/* Import Components */
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { GlobalStyle, Header, Header2 } from './styles'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        nickname
        email
        house
      }
      token
    }
  }
`

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: {
        email: '',
        password: '',
      },
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleEmail(e) {
    let value = e.target.value
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser.email),
    )
  }

  handlePassword(e) {
    let value = e.target.value
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser),
    )
  }

  handleInput(e) {
    let value = e.target.value
    let name = e.target.name
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
        },
      }),
      () => console.log(this.state.newUser),
    )
  }

  handleFormSubmit(e) {
    e.preventDefault()
    let userData = this.state.newUser

    fetch('http://example.com', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      response.json().then(data => {
        console.log('Successful' + data)
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>CRIMSON CONFESSIONS</Header>
        <Header2>Anonymously Share Your College Confessions </Header2>

        {/* Insert nickname */}
        <br />
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={'text'}
            title={'Email'}
            name={'email'}
            value={this.state.newUser.email}
            placeholder={'Enter your email'}
            handleChange={this.handleInput}
          />
          <br />
          {/* Insert password */}
          <Input
            inputType={'text'}
            title={'Password'}
            name={'password'}
            value={this.state.newUser.password}
            placeholder={'Enter your password'}
            handleChange={this.handleInput}
          />
          <br />
          {/* Submit info */}
          <Mutation
            mutation={LOGIN_USER}
            variables={{
              email: this.state.newUser.email,
              password: this.state.newUser.password,
            }}
          >
            {(loginUser, { data }) => (
              <Link to="/newsfeed">
                <Button
                  primary
                  onClick={loginUser}
                  action={() => {
                    loginUser()
                  }}
                >
                  Submit
                </Button>
              </Link>
            )}
          </Mutation>
        </form>
      </React.Fragment>
    )
  }
}

export default Login
