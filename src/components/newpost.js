import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { pushPost } from '../actions'

const fields = ['title','categories', 'content']

class NewPost extends Component {
  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error? 'has-danger':''}`

    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.label}</label>
        <input className={'form-control ' + field.name} name={field.name} type="text" {...field.input} />
        {touched && error? 
          <div className="form-error">
            <span className="glyphicon glyphicon-warning-sign form-control-feedback">⚠️</span>
            <span className="form-error-message">{error}</span>
          </div>: ''}
      </div>
    )
  }
  renderContentField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error? 'has-danger':''}`

    return (
      <div className={className}>
        <textarea className="form-control new-post content" {...field.input} />
        {touched && error? 
          <div className="form-error"><span className="glyphicon glyphicon-warning-sign form-control-feedback">⚠️</span>
          <span className="form-error-message">{error}</span></div>: ''}
      </div>
    )
  }

  formSubmit (values) {
    this.props.pushPost(values, (o) => {this.props.history.push('/'); return o})
    
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div>
        <h2>New Post</h2>
        <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
          <Field name="title" label="Title" component={this.renderField} />
          <Field name="categories" label="Categories" component={this.renderField} />
          <Field name="content" component={this.renderContentField} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger offset-left">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  fields.filter(k=> (!values.hasOwnProperty(k)) || !values[k].trim())
    .forEach(k=> errors[k] = 'required field')

  return errors 
}

export default reduxForm({ validate, form: 'PostsNewForm' })(
  connect(null,{ pushPost })(NewPost)
)
