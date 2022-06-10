import React, { useRef, useState } from 'react';
import { signup } from '../api/signup';
import { setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,12}$/;
const NICK_REGEX = /^[@][A-z0-9-_]{3,12}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const username = useRef();
  const nickname = useRef();
  const email = useRef();
  const password = useRef();
  const confirm_password = useRef();

  const [errMsg, setErrMsg] = useState({
    status: false,
    msg: '',
  });

  const validateUsername = () => {
    if (
      USER_REGEX.test(username.current.value) ||
      username.current.value === ''
    ) {
      username.current.setCustomValidity('');
    } else {
      username.current.setCustomValidity(
        '4 to 12 characters.\nMust begin with a letter.\nLetters, numbers, underscores, hyphens allowed.'
      );
    }
  };

  const validateNickname = () => {
    if (
      NICK_REGEX.test(nickname.current.value) ||
      nickname.current.value === ''
    ) {
      nickname.current.setCustomValidity('');
    } else {
      nickname.current.setCustomValidity(
        '4 to 12 characters.\nMust begin with "@".\nLetters, numbers, underscores, hyphens allowed.'
      );
    }
  };

  const validatePassword = () => {
    if (
      PWD_REGEX.test(password.current.value) ||
      password.current.value === ''
    ) {
      password.current.setCustomValidity('');
    } else {
      password.current.setCustomValidity(
        '8 to 24 characters.\nMust include uppercase and lowercase letters, a number and a special character.\nAllowed special characters: ! @ # $ %'
      );
    }

    if (password.current.value != confirm_password.current.value) {
      confirm_password.current.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.current.setCustomValidity('');
    }
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    signup({
      username: username.current.value,
      nickname: nickname.current.value,
      email: email.current.value,
      password: password.current.value,
      profile: '',
      describtion: '',
    })
      .then(({ user, token }) => {
        dispatch(setCredentials({ user, token }));
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setErrMsg({ status: true, msg: 'Username already taken' });
        } else {
          setErrMsg({ status: true, msg: error.message });
        }
      });

    clearFields();
  };

  const clearFields = () => {
    username.current.value = '';
    nickname.current.value = '';
    email.current.value = '';
    password.current.value = '';
    confirm_password.current.value = '';
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      onChange={() => {
        setErrMsg({ status: false, msg: '' });
      }}
      className='form'
    >
      <p className={errMsg.status ? 'form-error-msg' : 'offscreen'}>
        {errMsg.msg}
      </p>
      <label htmlFor='username' className='auth-label'>
        Username<span className='imp-mark'>*</span>
        <br />
        <input
          type='text'
          id='username'
          className='auth-input'
          placeholder='Username'
          autoComplete='off'
          onChange={validateUsername}
          ref={username}
          required
        />
      </label>
      <label htmlFor='nickname' className='auth-label'>
        Nickname<span className='imp-mark'>*</span>
        <br />
        <input
          type='text'
          id='nickname'
          className='auth-input'
          placeholder='example: @johndoe'
          autoComplete='off'
          ref={nickname}
          onChange={validateNickname}
          required
        />
      </label>
      <label htmlFor='email' className='auth-label'>
        Email<span className='imp-mark'>*</span>
        <br />
        <input
          type='email'
          id='email'
          className='auth-input'
          placeholder='Email Address'
          autoComplete='off'
          ref={email}
          required
        />
      </label>
      <label htmlFor='password' className='auth-label'>
        Password<span className='imp-mark'>*</span>
        <br />
        <input
          type='password'
          id='password'
          className='auth-input'
          placeholder='Password'
          autoComplete='off'
          ref={password}
          onChange={validatePassword}
          required
        />
      </label>
      <label htmlFor='conf-password' className='auth-label'>
        Confirm Password<span className='imp-mark'>*</span>
        <br />
        <input
          type='password'
          id='conf-password'
          className='auth-input'
          placeholder='Password'
          autoComplete='off'
          ref={confirm_password}
          onKeyUp={validatePassword}
          required
        />
      </label>
      <button className='btn btn-primary' type='submit'>
        SignUp
      </button>
    </form>
  );
};
