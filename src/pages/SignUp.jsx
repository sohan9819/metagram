import React, { useEffect, useRef, useState } from 'react';
import Liq from '../assets/images/liq.png';
import { Nav, SignUpForm } from '../components/all';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
      <Nav />

      <main className='main'>
        <div class='container auth'>
          <article class='auth-card'>
            <img src={Liq} alt='background image' class='blob bg-image' />
            <h2 class='logo'>METAGRAM</h2>
            <p class='message'>
              Welcome , <br />
              sign up to join 😉
            </p>
            <SignUpForm />
            <small>
              Already have an account ?{' '}
              <b>
                <Link to='/auth-signin'>SignIn</Link>
              </b>
            </small>
          </article>
        </div>
      </main>
    </>
  );
};
