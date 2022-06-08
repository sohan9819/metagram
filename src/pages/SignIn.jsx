import React from 'react';
import Liq from '../assets/images/liq.png';
import { Nav, SignInForm } from '../components/all';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <>
      <Nav />
      <main className='main'>
        <div class='container auth'>
          <article class='auth-card'>
            <img src={Liq} alt='background image' class='blob bg-image' />
            <h2 class='logo'>METAGRAM</h2>
            <p class='message'>
              Welcome back , <br />
              sign in to continue to 😉
            </p>
            <SignInForm />
            <small>
              Don't have an account ?{' '}
              <b>
                <Link to='/auth/signup'>SignUp</Link>
              </b>
            </small>
          </article>
        </div>
      </main>
    </>
  );
};
