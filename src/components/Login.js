import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Login = ({ history }) => {
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const {password,email,} = userInfoFromStorage;


  const submitHandler = (e) => {
    e.preventDefault();
    if (emailLogin === email && passwordLogin === password) {
      alert("hurray successfully login");
      history.push("/dashboard");
    } else {
      alert("oops wrong password or email");
    }
  };

  return (
    <div className="container">
      <h3> Welcome to Login Page</h3>
      <div className="box-2-login">
        <img src="https://mir-s3-cdn-cf.behance.net/user/276/8dde5f179750031.5c45650a8bd7e.jpg" alt='avatar' />
      </div>

      <div className="login">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmailLogin(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
