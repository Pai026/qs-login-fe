import React from "react";
import loginImg from "../../login.svg";
//import axios from 'axios';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // state stores the value from the imput field
      email: '',
      password: ''
  };
  }
  handleChange = (e) => { //when the value in the input field changes this function is called and stores the state of the variables
    this.setState({
        [e.target.name]: e.target.value
    })
handlelogin = (e) => { //called when the login btn is pressed basically it does an axios call to the database and sends the email and password to the database for authentication
  console.log(this.state.email+"  "+this.state.password );
/*  axios.post('#todolinkto the database' , {email: this.state.email,password: this.state.password})
    .then(res => {
      console.log(res.data); //this field has to be modified like here we need to store the token into the localstorage so that the user details can be recovered from that token
  })*/

}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={e => this.handleChange(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={e => this.handleChange(e)} /> <!--onChange is a inbuild function in html we specify this as onChange=fn name but in react we add{} to show it is binded to a function -->
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onclick({handlelogin}) className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
