import React, { Component } from 'react'
import axios from 'axios'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import FacebookIcon from '../../images/facebook-box.png'

import config from '../../config';
var apiRoot = config.api.root

class FacebookLogin extends Component{
    
    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : config.facebookAppId,
              cookie     : true,
              xfbml      : true,
              version    : 'v2.8'
            });
        };
    }
    
    facebookLogin = () => { 
        window.FB.login(
          (resp) =>{
            this.statusChangeCallback(resp)
          },{ scope : 'public_profile' }
        )
    }
    
    checkLoginState =() =>{
      window.FB.getLoginStatus( (response) =>{
        this.statusChangeCallback(response)
      })
    }
    
    statusChangeCallback = (response) =>{
        if (response.status === 'connected') {
            this.fetchDataFacebook();
        } else if (response.status === 'not_authorized') {
            console.log('Import error', 'Authorize app to import data', 'error')
        } else {
            console.log('Import error', 'Error occured while importing data', 'error')
        }
    }
    
    fetchDataFacebook = () => {
      window.FB.api('/me',{fields: "id,picture,email,name"}, (user) =>{
        // console.log(user)
        var data = {
          name:user.name,
          email:user.email,
          socialId:user.id,
          imageUrl:user.picture.data.url
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
    }

  render(){
    return(
      <Button onClick={this.facebookLogin} className="facebookButton" raised color="primary">
        <i className="fa fa-facebook-official" aria-hidden="true" style={{fontSize:'20px'}}></i>
        &nbsp; &nbsp;Facebook
      </Button>
    )
  }
}

export default FacebookLogin;