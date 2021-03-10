import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '655105447076-lvotoi4b5glipdtcfpl2hvd2hlmfndv4.apps.googleusercontent.com';

class GoogleAuth extends Component {
   constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      accessToken: '',
    }
  }

  login = (response) => {
    if(response.accessToken) {
      this.setState(state => ({
        isLoggedIn: true,
        accessToken: response.accessToken
      }))
      this.props.setToken(response.accessToken)
    }
  }

  logout = (response) => {
    this.setState(state => ({
      isLoggedIn: false,
      accessToken: ''
    }))
    this.props.clearToken()
  }

  handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  render() {
    let authJsx

    if (this.state.isLoggedIn) {
      authJsx = (
        <Fragment>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
            clearToken={this.props.clearToken}
          ></GoogleLogout>
        </Fragment>
      )
    }

    if (!this.state.isLoggedIn) {
      authJsx = (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={this.login}
          onFailure={this.handleLoginFailure}
          setToken={this.props.setToken}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
          scope='https://www.googleapis.com/auth/photoslibrary'
        ></GoogleLogin>
      )
    }
    
    return authJsx
  }
}

export default withRouter(GoogleAuth);