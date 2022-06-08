import React from 'react';
import { Nav, ButtonCta } from '../components/all';
import Liq from '../assets/images/liq.png';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/auth/signin');
  };

  return (
    <>
      <Nav />
      <main className='main'>
        <div className='container landing'>
          <div class='landing-info'>
            <div class='logo'>
              <h1 class='title'>METAGRAM</h1>
              <p class='subtitle'>
                Meet new friends and build your social network
              </p>
            </div>
            <ButtonCta onClick={onClickHandler} />
          </div>
          <div class='landing-image'>
            <img src={Liq} alt='landing image' class='blob' />
          </div>
        </div>
      </main>
    </>
  );
};
