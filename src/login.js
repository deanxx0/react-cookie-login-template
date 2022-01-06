import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
axios.defaults.withCredentials = true;

function Login() {
  const [username, SetUsername] = useState();
  const [password, SetPassword] = useState();
  const [loginResult, SetLoginResult] = useState('Fail');
  const navigate = useNavigate();


  const onUsernameChange = (e) => {
    SetUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    SetPassword(e.target.value);
  }

  const onLoginClick = async () => {
    const reqBody = {
      username: username,
      password: password
    }
    await axios.post('https://localhost:3001/users/login', reqBody)
    .then(res => {
      SetLoginResult('OK');
      console.log(res.data);
      //cookie get role check
      
      navigate('/member');
      navigate('/member', {replace: true});
    })
    .catch(err => {
      SetLoginResult('Fail');
      console.log(err);
    })
  }

  return (
    <div className="App">
      <div>
        <label>Username</label>
        <TextField id="standard-basic" label="username" variant="standard" onChange={onUsernameChange} />
      </div>
      <div>
        <label>Password</label>
        <TextField id="standard-basic" label="password" variant="standard" onChange={onPasswordChange} />
      </div>
      <div>
        <Button variant="contained" onClick={onLoginClick}>Login</Button>
      </div>
      <div>
        Login Result: {loginResult}
      </div>
    </div>
  );
}

export default Login;
