import { useRef } from 'react';
import axios from 'axios';

export const SignInForm = () => {
  const username = useRef();
  const password = useRef();

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    axios
      .post('/api/auth/login', {
        username: username.current.value,
        password: password.current.value,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err, err.data, err.message);
      });
  };

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <p className='form-error-msg'>Please enter valid inputs</p>
      <label htmlFor='username' className='auth-label'>
        Username<span className='imp-mark'>*</span>
        <br />
        <input
          type='text'
          id='username'
          className='auth-input'
          placeholder='Username'
          ref={username}
          required
        />
      </label>
      <label htmlFor='password' className='auth-label'>
        Password<span className='imp-mark'>*</span>
        <br />
        <input
          type='password'
          className='auth-input'
          placeholder='Password'
          ref={password}
          required
        />
      </label>
      <button className='btn btn-primary' type='submit'>
        SignIn
      </button>
    </form>
  );
};
