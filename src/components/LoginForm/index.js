import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMeassage: false, errorMsg: ''}

  onSubmitSuccess =  => {
    const {history} = this.props
    history.replace('/')
  }

 
  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } 
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassWord = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="inputs"
          id="username"
          type="text"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="inputs"
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showErrorMeassage, errorMsg} = this.state
    return (
      <div className="bg-container">
        <div className="login-container">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            {this.renderUsername()}
            {this.renderPassword()}

            <button type="submit" className="login-btn">
              Login
            </button>
            {showErrorMeassage && <p className="msg-err">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
