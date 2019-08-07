import React, { Component } from 'react'
import Button from '../../components/Button'
import { GlobalStyle, Header, Header2, buttonStyle } from './styles'
import theme from '../../theme'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>CRIMSON CONFESSIONS</Header>
        <Header2>Anonymously Share Your College Confessions </Header2>
        <Link to="/login">
          <Button onClick={this.handleFormSubmit} primary>
            Log In
          </Button>
        </Link>
        <Link to="/register">
          <Button onClick={this.handleFormSubmit}>Sign Up</Button>
        </Link>
      </React.Fragment>
    )
  }
}

export default Home
