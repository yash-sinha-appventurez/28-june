import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../actions/userAction";
import { decimal } from "../constants/regex";
const Sigin = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const uploadFileHandler = (e) => {
    if (e.target.files.length !== 0) {
      // usiong the target file to grab the file
      const file = URL.createObjectURL(e.target.files[0]);
      setImage(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password || name.trim().length < 15) {
      if (password.match(decimal)) {
        console.log(image);
        dispatch(register(name, email, password, image));
        setName("");
        setPassword("");
        setEmail("");
        history.push(`/login`);
      } else {
        alert(
          " 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        );
      }
    }
  };

  console.log(decimal);
  return (
    <div className="container-1">
      <div className="sigin-box-1">
        <h1>Welcome to appventure demo login</h1>
      </div>
      <div className="sigin-box-2">
        <img id="sigin-logo"
          src="https://mir-s3-cdn-cf.behance.net/user/276/8dde5f179750031.5c45650a8bd7e.jpg"
          alt="avatar"
        />
      </div>
      <div className="sigin-box-3">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <input id="fileItem" onChange={uploadFileHandler} type="file" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Sigin;
