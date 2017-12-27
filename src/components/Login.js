import React from 'react'
import axios from 'axios'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import { DialogContent, DialogActions } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import Signup from './Signup'
import config from '../config'

import GoogleLogin from './socialLogins/GoogleLogin'
import FacebookLogin from './socialLogins/FacebookLogin'
import LinkedinLogin from './socialLogins/LinkedinLogin'

var apiRoot = config.api.root

class Login extends React.Component{

	constructor(props){
		super(props)
		this.state={
			email:null,
			password:null,
			showSignup:false
		}
	}

	handleChange = (event) => {
		const target = event.target;
		var partialState = {};
		partialState[target.name] = target.value;
		this.setState(partialState);
	}

	Login = (event) =>{
		event.preventDefault();
		var data = {
			email:this.state.email,
			password:this.state.password
		}
		axios.post(apiRoot+'/trybotics/login',data)
	    .then( (response) =>{
	      // console.log(response)
	      if(response.data.length){
	      	localStorage.setItem("signIn", true)
	      	localStorage.setItem("authToken", response.data[0].authToken)
	      	this.props.closeModel()
	      	alert("Successfully Login")
	      	window.location.reload()
	      }
	      else{
	      	alert("Incorrect Email ID and Password")
	      }
	    })
	    .catch( (error) => {
	      console.log(error);
	      alert("Incorrect Email ID and Password")
	    })
	}

	
	Signup = (event) =>{
		event.preventDefault();
		var data = {
			name:this.state.name,
			phone:this.state.phone,
			email:this.state.email,
			password:this.state.password
		}
		axios.post(apiRoot+'/trybotics/signup',data)
	    .then( (response) =>{
	      console.log(response)
	      if(response.data.User){
	      	alert("You are already registered, Please Login")
	      }else if(response.data.id){
	      	localStorage.setItem("signIn", true)
	      	localStorage.setItem("authToken", response.data.authToken)
	      	this.props.closeModel()
	      	alert("Your account is created successfully")
	      	window.location.reload()
	      }else{
	      	alert("Enter Correct Data")
	      }
	    })
	    .catch( (error) => {
	      console.log(error)
	      alert("Please Enter Your Details")
	    });
	}

	showSignup = () =>{
		this.setState({showSignup:true})
	}

	closeSignup = () =>{
		this.setState({showSignup:false})
	}

	googleLogin = (response) => {
		// console.log(response.profileObj);
		var data = {
			name:response.profileObj.name,
			email:response.profileObj.email,
			socialId:response.profileObj.googleId,
			imageUrl:response.profileObj.imageUrl
		}
		axios.post(apiRoot+'/trybotics/socialLogin',data)
	    .then( (response) =>{
	      console.log(response.data)
	      if(response.data.id){
	      	localStorage.setItem("signIn", true)
	      	localStorage.setItem("authToken", response.data.authToken)
	      	this.props.closeModel()
	      	alert("Successfully Login")
	      	window.location.reload()
	      }else{
	      	alert("Enter Correct Data")
	      }
	    })
	    .catch( (error) => {
	      console.log(error)
	      alert("Please Enter Your Details")
	    });
	}

	render() {
		return (
		<div>
			<div className="formHeader">{(this.state.showSignup)?'Signup':'Login'} <Icon className="closeIcon" onClick={this.props.closeModel}>clear</Icon></div>
			<DialogContent>
				{(this.state.showSignup)?
				<Signup handleChange={this.handleChange} closeSignup={this.closeSignup}/>
				:
				<div>
					<TextField
						name="email"
						label="Email ID"
						className="textField"
						type="text"
						onChange={this.handleChange}
						autoComplete="current-email"
						margin="normal"
						autoFocus
						fullWidth
					/>
					<TextField
						name="password"
						label="Password"
						className="textField"
						type="password"
						onChange={this.handleChange}
						autoComplete="current-password"
						margin="normal"
						fullWidth
					/>
				</div>
				}
				<div>
					<p>
						<a className="clickHere">Forget Password</a>
						<a className="clickHere pullRight" onClick={(this.state.showSignup)?this.closeSignup:this.showSignup}>{(this.state.showSignup)?'Login':'Signup'}</a>
					</p>
					<center>
						<Button raised className="button submitButton" onClick={this.state.showSignup?this.Signup:this.Login}>
							{(this.state.showSignup)?'Signup':'Login'}
						</Button>
					</center>
				</div>	
				<center>
					<p style={{color:'#666'}}>Or Login With Social Account</p>
					<GoogleLogin
					    clientId={config.googleClientId}
					    onSuccess={this.googleLogin}
					    onFailure={this.googleLogin}
				    />         
			      	<FacebookLogin
			      		closeModel={this.props.closeModel}
				  	/>
				</center>
				<center>
					<LinkedinLogin
				  		closeModel={this.props.closeModel}
				  		button={
				  			<Button className="linkedInButton" raised color="primary">
								<i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize:'20px'}}></i> 
								&nbsp; &nbsp;LinkedIn
							</Button>
				  		}
				  	/>
				</center>
			</DialogContent>
		</div>
		)
	}
}

export default Login