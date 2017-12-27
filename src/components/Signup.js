import React from 'react'
import axios from 'axios'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Login from './Login'
import config from '../config'

var apiRoot = config.api.root

class Signup extends React.Component{

	constructor(props){
		super(props)
		this.state={
			name:null,
			phone:null,
			email:null,
			password:null
		}
	}

  	render() {
	    return (
	    	<div>
	    		<TextField
		          name="name"
		          label="User Name"
		          className="textField"
		          type="text"
		          onChange={this.props.handleChange}
		          autoComplete="current-name"
		          margin="normal"
		          autoFocus
		          fullWidth
		        />
		        <TextField
		          name="phone"
		          label="Phone Number"
		          className="textField"
		          type="text"
		          onChange={this.props.handleChange}
		          autoComplete="current-phone"
		          margin="normal"
		          fullWidth
		        />
		        <TextField
		          name="email"
		          label="Email ID"
		          className="textField"
		          type="text"
		          onChange={this.props.handleChange}
		          autoComplete="current-email"
		          margin="normal"
		          fullWidth
		        />
		        <TextField
		          name="password"
		          label="Password"
		          className="textField"
		          type="password"
		          onChange={this.props.handleChange}
		          autoComplete="current-password"
		          margin="normal"
		          fullWidth
		        />
			</div>
	    )
  	}
}

export default Signup