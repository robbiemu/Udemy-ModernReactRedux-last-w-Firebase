import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'


class Post extends Component {
  componentDidMount () {
    this.props.fetchPost(this.props.match.params.id)
  }
  render () {
    return this.props.Post?(
        <div>
          <nav>
            <div className="text-xs-right">
              <Link className="btn btn-secondary" to="/">Return</Link>
            </div>
          </nav>
          <h2>{this.props.Post.title}</h2>
          <h3>Post <small>({this.props.match.params.id})</small></h3>
          <h4>{this.props.Post.categories}</h4>
          <div><p>{this.props.Post.content}</p></div>
          <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>Delete</button>
        </div>
      ) :
      <div></div>
  }
  onDelete () {
    this.props.deletePost(this.props.match.params.id, (o)=> { 
      this.props.history.push('/'); 
      return o
    })
  }
}

function mapStateToProps ({ Posts }, ownProps) {
  return {Post: Posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(Post)