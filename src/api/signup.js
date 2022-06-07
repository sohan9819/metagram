import axios from 'axios';
const SIGNUP_URL = '/api/auth/signup';

export const signup = (user) => {
  return axios
    .post(SIGNUP_URL, user)
    .then((res) => res.data)
    .then(({ createdUser, encodedToken }) => {
      localStorage.setItem('user', JSON.stringify(createdUser));
      localStorage.setItem('AUTH_TOKEN', JSON.stringify(encodedToken));
      return { user: createdUser, token: encodedToken };
    });
};
