import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    userType: "",
    image: "",
  };

  fileHandler = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  btnregister = (e) => {
    const data = new FormData();
    e.preventDefault();
    data.append("email", this.state.email);
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    data.append("userType", this.state.userType);
    data.append("image", this.state.image);

    axios
      .post("http://localhost:4000/register", data, {
        withCredentials: false,
      })
      .then(function (res) {
        console.log(res);
        console.log("registration success");
        alert("Registration success");
      })
      .catch(function (err) {
        console.log("registration failed");
        alert("Registration failed");
      });
  };

  render() {
    return (
      <>
        <div class="container">
          <form method="post" encType="multipart/form-data">
            <label className="label" for="username">
              Username:
            </label>
            <br />
            <input
              className="input-container"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
            <br />
            <label for="email" className="label">
              Email:
            </label>
            <br />
            <input
              className="input-container"
              type="text"
              id="email"
              placeholder="Enter Email"
              value={this.state.email}
              name="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <label for="password" className="label">
              Password:
            </label>
            <br />
            <input
              className="input-container"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br />
            <label htmlFor="userType" className="label">
              User Type:
            </label>
            <br />
            <input
              className="input-container"
              type="text"
              id="userType"
              name="userType"
              placeholder="Enter UserType"
              value={this.state.userType}
              onChange={(e) => {
                this.setState({ userType: e.target.value });
              }}
            />
            <br />
            <label htmlFor="userType" className="label">
              Image:
            </label>
            <br />
            <input
              className="input-container"
              type="file"
              id="image"
              name="userType"
              placeholder="Enter UserType"
              value={this.state.imageimage}
              onChange={this.fileHandler}
            />

            <button className="button" type="submit" onClick={this.btnregister}>
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
