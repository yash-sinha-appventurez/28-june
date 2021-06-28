import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [image,setImage]=useState('')

  const { name, password, email } = userInfoFromStorage;
  console.log(name, password, email);

    const uploadFileHandler=(e)=>{
        const file=e.target.files[0]
        
    }



  const submitHandler = (e) => {
    e.preventDefault();
    if(emailLogin===email && passwordLogin===password){
            alert("hurray successfully login")
    }
    else{
            alert("oops wrong password or email")
    }

  };

  return (
    <div className='container'>
      <h3 > Welcome to Login Page</h3>
      <div className='login'>
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
          <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              
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
