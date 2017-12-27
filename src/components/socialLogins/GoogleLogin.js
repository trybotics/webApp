import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'

import GoogleIcon from '../../images/google.png'

class GoogleLogin extends Component {
  constructor(props) {
    super(props)
    this.signIn = this.signIn.bind(this)
    this.state = {
      disabled: true
    }
  }
  componentDidMount() {
    const { clientId, cookiePolicy, loginHint, hostedDomain, autoLoad, isSignedIn, fetchBasicProfile, redirectUri, discoveryDocs, onFailure, uxMode, scope } = this.props
      ; ((d, s, id, cb) => {
        const element = d.getElementsByTagName(s)[0]
        const fjs = element
        let js = element
        js = d.createElement(s)
        js.id = id
        js.src = '//apis.google.com/js/client:platform.js'
        fjs.parentNode.insertBefore(js, fjs)
        js.onload = cb
      })(document, 'script', 'google-login', () => {
        const params = {
          client_id: clientId,
          cookie_policy: cookiePolicy,
          login_hint: loginHint,
          hosted_domain: hostedDomain,
          fetch_basic_profile: fetchBasicProfile,
          discoveryDocs,
          ux_mode: uxMode,
          redirect_uri: redirectUri,
          scope
        }
        window.gapi.load('auth2', () => {
          this.setState({
            disabled: false
          })
          if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(params).then(
              res => {
                if (isSignedIn && res.isSignedIn.get()) {
                  this._handleSigninSuccess(res.currentUser.get())
                }
              },
              err => onFailure(err)
            )
          }
          if (autoLoad) {
            this.signIn()
          }
        })
      })
  }
  signIn(e) {
    if (e) {
      e.preventDefault()
    }
    if (!this.state.disabled) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      const { onSuccess, onRequest, onFailure, prompt, responseType } = this.props
      const options = {
        prompt
      }
      if (responseType === 'code') {
        auth2.grantOfflineAccess(options).then(res => onSuccess(res), err => onFailure(err))
      } else {
        auth2.signIn(options).then(res => this._handleSigninSuccess(res), err => onFailure(err))
      }
    }
  }
  _handleSigninSuccess(res) {
    const basicProfile = res.getBasicProfile()
    const authResponse = res.getAuthResponse()
    res.googleId = basicProfile.getId()
    res.tokenObj = authResponse
    res.tokenId = authResponse.id_token
    res.accessToken = authResponse.access_token
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName()
    }
    this.props.onSuccess(res)
  }

  render() {  
    return (
      <Button className="googleButton" raised color="primary" onClick={this.signIn}>
        <i className="fa fa-google-plus-official" aria-hidden="true" style={{fontSize:'20px'}}></i>
        &nbsp; &nbsp;Google
      </Button>
    )
  }
}

export default GoogleLogin
