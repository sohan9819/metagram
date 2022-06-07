import axios from 'axios';
const SIGNIN_URL = '/api/auth/login';

export const signin = (user) => {
  return axios
    .post(SIGNIN_URL, user)
    .then((res) => res.data)
    .then(({ foundUser, encodedToken }) => {
      localStorage.setItem('user', JSON.stringify(foundUser));
      localStorage.setItem('AUTH_TOKEN', JSON.stringify(encodedToken));
      return { user: foundUser, token: encodedToken };
    });
};
