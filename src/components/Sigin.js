import {useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {register} from  '../actions/userAction'
const Sigin = ({history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

 const dispatch=useDispatch()


const submitHandler=(e)=>{
    e.preventDefault()
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
   if (password || name.trim().length<15){
       if(password.match(decimal)){
            dispatch(register(name,email,password))
            setName("")
            setPassword("")
            setEmail("")
            history.push(`/login`)
       }
       else{
            alert(' 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
       }
   }



    
}

  return (
    <div className="container">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" required  onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  required onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required   onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Sigin;
