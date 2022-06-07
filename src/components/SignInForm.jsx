import { useRef, useState } from 'react';
import { signin } from '../api/signin';
import { setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const SignInForm = () => {
  const dispatch = useDispatch();

  const username = useRef();
  const password = useRef();

  const [errMsg, setErrMsg] = useState({
    status: false,
    msg: '',
  });

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    signin({
      username: username.current.value,
      password: password.current.value,
    })
      .then(({ user, token }) => {
        dispatch(setCredentials({ user, token }));
        axios.defaults.headers.common['authorization'] = token;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setErrMsg({ status: true, msg: 'Missing password' });
        } else if (error.response.status === 404) {
          setErrMsg({ status: true, msg: 'Missing username' });
        } else {
          setErrMsg({ status: true, msg: 'Login Failed' });
        }
      });

    navigate('/home');
    clearFields();
  };

  const clearFields = () => {
    username.current.value = '';
    password.current.value = '';
  };

  const guestSigninHandler = () => {
    signin({
      username: 'adarshbalika',
      password: 'adarshbalika',
    })
      .then(({ user, token }) => {
        dispatch(setCredentials({ user, token }));
        axios.defaults.headers.common['authorization'] = token;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setErrMsg({ status: true, msg: 'Missing password' });
        } else if (error.response.status === 404) {
          setErrMsg({ status: true, msg: 'Missing username' });
        } else {
          setErrMsg({ status: true, msg: 'Login Failed' });
        }
      });
  };

  return (
    <>
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

      <button className='btn btn-primary' onClick={guestSigninHandler}>
        Guest SignIn
      </button>
      <br />
    </>
  );
};

/*

401 => incorrect password 
404 => username not valid
*/
