import React, { Component } from 'react'

/* Import Components */

import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button/'
import { GlobalStyle, Header, Header2 } from './styles'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { Mutation, graphql } from 'react-apollo'
import config from '../../config.js'

const ADD_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        nickname
        email
        house
      }
      error {
        message
      }
    }
  }
`

const houseOptions = ['Yard', 'River Houses', 'Quad', 'Off Campus']

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: {
        nickname: '',
        email: '',
        house: '',
        password: '',
      },
    }

    this.handleNickname = this.handleNickname.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleNickname(e) {
    let value = e.target.value
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser.nickname),
    )
  }

  handleEmail(e) {
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

  handleClearForm(e) {
    e.preventDefault()
    this.setState({
      newUser: {
        nickname: '',
        email: '',
        house: '',
        password: '',
      },
    })
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        {/* Insert nickname */}
        <GlobalStyle />
        <Header>CRIMSON CONFESSIONS</Header>
        <Header2>Anonymously Share Your College Confessions </Header2>
        <Input
          inputType={'text'}
          title={'Nickname'}
          name={'nickname'}
          value={this.state.newUser.nickname}
          placeholder={'Enter your anonymous nickname'}
          handleChange={this.handleInput}
        />{' '}
        {/* Insert email */}
        <Input
          inputType={'text'}
          title={'Email'}
          name={'email'}
          value={this.state.newUser.email}
          placeholder={'Enter your college email'}
          handleChange={this.handleInput}
        />{' '}
        {/* Select House */}
        <Select
          title={'House'}
          name={'house'}
          options={houseOptions}
          value={this.state.house}
          placeholder={'Select House'}
          handleChange={this.handleInput}
        />{' '}
        {/* Insert password */}
        <Input
          inputType={'text'}
          title={'Password'}
          name={'password'}
          value={this.state.newUser.password}
          placeholder={'Enter your password'}
          handleChange={this.handleInput}
        />{' '}
        {/* Submit info */}
        <Mutation
          mutation={ADD_USER}
          variables={{ input: this.state.newUser }}
          onCompleted={data => {
            if (!data) {
              alert(data.error.message)
            }
          }}
        >
          {(addUser, { data }) => (
            <Link to="/myprofile">
              <Button
                primary
                onClick={console.log('Registered!')}
                action={() => {
                  addUser()
                }}
              >
                Submit
              </Button>
            </Link>
          )}
        </Mutation>
        {/* Clear info */}
        <Button action={this.handleClearForm}>Clear</Button>

      </form>
    )
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
}

export default Register
