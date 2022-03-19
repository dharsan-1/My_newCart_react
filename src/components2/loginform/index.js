import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', onSubmitFailureStatus: false}

  onchangeUser = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSwuccess = () => {
    const {history} = this.props
    history.replace('/home')
  }

  onSubmitFailurwe = () => {
    this.setState({onSubmitFailureStatus: true})
  }

  onSubmitChanges = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSwuccess()
    } else if (response.ok === false) {
      this.onSubmitFailurwe()
    }
  }

  render() {
    const {onSubmitFailureStatus} = this.state
    return (
      <div className="first-background">
        <div className="companylogocon">
          <h1 className="logo">Dharsan</h1>
          <p className="para-logo">cart&Logistics</p>
        </div>
        <div className="img-login-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="img-login"
            alt="login-img"
          />
          <form className="form-div" onSubmit={this.onSubmitChanges}>
            <label htmlFor="userid">username</label>
            <input type="text" id="userid" onChange={this.onchangeUser} />
            <label htmlFor="passwordid">passoword</label>
            <input
              type="password"
              id="passwordid"
              onChange={this.onchangePassword}
            />
            <button type="submit" className="button">
              log in
            </button>
            {onSubmitFailureStatus ? (
              <p className="wrong_crediantdiatls">* wrong credentials</p>
            ) : (
              ' '
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
