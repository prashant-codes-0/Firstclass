import React, { Component } from "react";
import axios from "axios";
class Update extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    userType: "",
    id:this.props.match.params.id
  };

//   fileHandler = (e) => {
//     this.setState({
//       image: e.target.files[0],
//     });
//   };

  btnupdate = (e) => {


    axios
      .post("http://localhost:4000/updateuser/"+this.state.id)
      
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
            

            <button className="button" type="submit" onClick={this.btnupdate}>
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Update;
