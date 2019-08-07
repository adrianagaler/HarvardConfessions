import Picker from 'react-giphy-component'
import React, { Component, PropTypes } from 'react'
import { GifDesign } from './styles'

class GifPicker extends Component {
  log(gif) {
    const src = gif.downsized.url
    const func = this.props.func(src)
  }

  render() {
    return (
      <GifDesign>
        <Picker onSelected={this.log.bind(this)} />
      </GifDesign>
    )
  }
}

export default GifPicker
