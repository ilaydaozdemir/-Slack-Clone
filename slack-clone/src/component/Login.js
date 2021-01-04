import { Button } from '@material-ui/core';
import React from 'react';
import '../css/Login.css';
import { auth, provider } from '../firebase';

function Login() {
  //google authentication
  //user paylasımı firabseden ac
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/2111/2111615.svg'
          alt=''
        />
        <h1>Sign in to Ilayda Ozdemir Programmer HQ </h1>
        <p>ilaydaozdemir.slack.com</p>
        <Button onClick={signIn}>Sıgn In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
