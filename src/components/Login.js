import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { login } from "../actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const userLoginstate = useSelector((state) => state.userLoginstate);

  const { sucess, error, } = userLoginstate;

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
 
  const history=useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(emailLogin, passwordLogin));
  };
 
 useEffect(()=>{
   if(sucess){
     alert('hurray')
     history.push('/dashboard')
     
   }
   else if(error){
     alert('Not a right password or message')
   }

 },[sucess,error])
 

  return (
    <div className="container-2">
      <h3> Welcome to Login Page </h3>
      <div className="login-box-1">
        <img
          id="login-img"
          src="https://mir-s3-cdn-cf.behance.net/user/276/8dde5f179750031.5c45650a8bd7e.jpg"
          alt="avatar"
        />
      </div>

      <div className="login-box-2">
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
