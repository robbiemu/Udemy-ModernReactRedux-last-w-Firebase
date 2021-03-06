import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Omap } from '../ObjectUtils'
import { fetchPosts } from '../actions'

class Posts extends Component {
  renderPosts () {
    return Omap(this.props.Posts, (p,i) => (
      <Link key={'posts_'+i} to={'/'+i}>
        <li className="list-group-item">{p.title}</li>
      </Link>
    ))
  }

  render () { 
    if(!this.props.Posts) { return <div></div>}
    return (
      <div>
        <nav>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/new">Add a post</Link>
          </div>
        </nav>
        <h2>Posts</h2>
        <ul className="posts">{this.renderPosts()}</ul>
      </div>
   ) 
  }
  componentWillMount () { this.props.fetchPosts() }
}

export default connect(({Posts}) => {return {Posts}}, {fetchPosts})(Posts)
