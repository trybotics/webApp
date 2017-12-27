import React, { Component } from 'react'
import axios from 'axios'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import LinkedinIcon from '../../images/linkedin-box.png'

import config from '../../config';
var apiRoot = config.api.root

class LinkedinLogin extends Component{
    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://platform.linkedin.com/in.js?async=true";
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t) 
    }
    
    //Trigger Login for LinkedIn
    linkedinLogin = () => {
        window.IN.init({
            api_key : config.linkedinApiKey
        });
        setTimeout( ()=>{
          this.getUserDetails()
        },1000)
    }
    
    getUserDetails = () => {
        window.IN.User.authorize( ()=>{ 
            window.IN.API.Profile("me")
                .fields(["id", "firstName", "lastName", "pictureUrl", "email-address"])
                .result( (profiles) =>{
                    // console.log(profiles.values[0]);
                    var data = {
                      name:profiles.values[0].firstName+' '+profiles.values[0].lastName,
                      email:profiles.values[0].emailAddress,
                      socialId:profiles.values[0].id,
                      imageUrl:profiles.values[0].pictureUrl
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
                })
                .error( (err) =>{
                    console.log('Import error - Error occured while importing data')
                });
        });
    }
    render(){
        return(
          <div onClick={this.linkedinLogin}>
            {this.props.button}
          </div>
        )
    }
}

export default LinkedinLogin;