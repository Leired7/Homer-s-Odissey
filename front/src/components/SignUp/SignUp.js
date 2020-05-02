import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { email: "" };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Email: {this.state.email}</h1>
        <input type="email" name="email" onChange={this.updateEmailField} />
      </div>
    );
  }

  updateEmailField(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }
}

export default SignUp;
