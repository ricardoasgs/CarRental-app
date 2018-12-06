import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LaddaButton, { S, ZOOM_IN } from "react-ladda";
import { Link, withRouter } from "react-router-dom";

import { signup } from "../actions/loginAction";

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      error: "",
      loading: false
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.props.dispatch(
      signup({ email, password, username }, () =>
        this.props.history.push("/feed")
      )
    );
  };

  render() {
    const { username, email, password, error, loading } = this.state;
    return (
      <RegisterContainer>
        <FormContainer>
          <RegisterTitle>Car Rental</RegisterTitle>
          <RegisterSubtitle>Please create your account!</RegisterSubtitle>
          <RegisterForm>
            <Input
              placeholder="Name"
              type="text"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            {error && <span>{error}</span>}
            <LaddaButton
              loading={loading}
              data-color="purple"
              data-size={S}
              data-style={ZOOM_IN}
              data-spinner-size={30}
              data-spinner-color="white"
              data-spinner-lines={12}
              onClick={this.onSubmit}
            >
              Register
            </LaddaButton>
          </RegisterForm>
        </FormContainer>
      </RegisterContainer>
    );
  }
}

const RegisterContainer = styled.div`
display: flex
justify-content: center
align-items: center
background-color: #F8F7FF
height: 100vh
width: 100vw
`;

const FormContainer = styled.div`
border-radius: 5px;
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: #B8B8FF
  height: 50vh
  width: 40vw
`;

const RegisterTitle = styled.h1`
color: #fff
  text-align: center
  padding-bottom: 15px
  font-size: 35px
  font-weight: 700
`;

const RegisterSubtitle = styled.h6`
color: #fff
  text-align: center
  padding-bottom: 15px
  font-size: 18px
  font-weight: 300
`;

const RegisterForm = styled.form`
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  max-width: 250px
`;

const Input = styled.input`
  border: 1px solid #c5c7c8
  border-radius: 3px
  height: 27px
  color: #060605
  font-size: 12px
  font-weight: 200
  line-height: 1.5
  padding: 0 15px
  margin: 8px 0
  width: 100%
  &:focus {
    outline: none;
  }
  -webkit-box-shadow: 0 0 0px 1000px white inset;
`;

export default connect(null)(withRouter(RegisterScreen));
