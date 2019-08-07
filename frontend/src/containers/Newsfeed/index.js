import React, { Component } from 'react'

/* Import Components */

import RenderPost from '../../components/RenderPosts'

class Newsfeed extends Component {
  render() {
    return (
      <React.Fragment>
        <RenderPost />
      </React.Fragment>
    )
  }
}

export default Newsfeed
