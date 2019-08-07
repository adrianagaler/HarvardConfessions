import React, { Component } from 'react'
import { Longtext, Title, GifDesign } from './styles'
import Center from 'react-center'
import GifPicker from '../GifPicker'
var GifPlayer = require('react-gif-player')

class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      gif: null,
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  addGif = gif => {
    console.log('hi')
    this.setState({ gif: gif })
    console.log(this.state)
  }

  render() {
    return (
      <div className="form-group">
        <Title>
          <label className="form-label">Create Your Post!</label>
        </Title>
        <Center>
          <Longtext
            contentEditable
            className="form-control"
            value={this.state.text}
            onChange={this.handleChange}
          >
            {this.state.gif && <GifPlayer gif={this.state.gif} />}
          </Longtext>
        </Center>
        <br />
        <Center>
          <GifPicker func={this.addGif} />
        </Center>
      </div>
    )
  }
}

export default TextArea
