import React, { Component } from 'react'

class RenderComment extends Component {
  render() {
    const { comments } = this.props

    return (
      <React.Fragment>
        {comments.map(comment => {
          return <div>{comment.text}</div>
        })}
      </React.Fragment>
    )
  }
}

export default RenderComment
