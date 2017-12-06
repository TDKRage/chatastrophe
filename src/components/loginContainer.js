import React, { Component, Fragment } from 'react';
import Header from './header';

class LoginContainer extends Component {
  render() {
    return (
      <div id="LoginContainer">
        <Header />
        <form>
          <p>Sign in or sign up by entering your email and password.</p>
          <input 
            type="text" 
            placeholder="Your email" />
          <input 
            type="password" 
            placeholder="Your password" />
          <button className="red light" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginContainer;