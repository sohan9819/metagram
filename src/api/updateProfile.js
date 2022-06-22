import axios from 'axios';

const UPDATE_PROFILE_URL = '/api/users/edit';

export const updateProfile = (userData) => {
  return axios
    .post(UPDATE_PROFILE_URL, { userData })
    .then((res) => res.data)
    .then((data) => {
      return data.user;
    });
};
