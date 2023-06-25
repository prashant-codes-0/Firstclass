import React, { Component } from "react";
import axios from "axios";
// import {useNavigate} from 'react-router-dom'
class Login extends Component {


  // navigate = useNavigate();

  state = {
    email: "",
    password: ""
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  btnlogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", this.state)
      .then(function (res) {
        console.log("token check", res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userType", res.data.userType);
        alert("login successful");
        window.location.href='/user2'
      })
      .catch((err) => {
        alert("login failed");
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <form>
          <div>
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              placeholder="enter email"
              className="input-container"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.changeHandle}
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              className="input-container"
              type="password"
              id="password"
              name="password"
              placeholder="enter password"
              value={password}
              onChange={this.changeHandle}
              required
            />
          </div>
          <button className="button" type="submit" onClick={this.btnlogin}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
