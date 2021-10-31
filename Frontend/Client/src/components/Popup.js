import React from 'react'

export default function App() {
    return(
        <form>
            <h3>Login Form</h3>
          <input type="email" placeholder="enter your email" class="box"/>
          <input type="password" placeholder="enter your password" class="box"/>
          <div class="remember">
            <input type="checkbox" name="" id="remember-me"/>
            <label for="remember-me">remember me</label>
          </div>
          <input type="submit" value="login now" class="header__menu-link btn btn--border btn--rounded"/>
          <p>forget password?<a href="#">click here</a></p>
          <p>don't have an account?<a href="#">create one?</a></p>
        </form>
    );
  }