import axios from 'axios';

const UPDATE_PROFILE_URL = '/api/users/edit';

export const updateProfile = (user, token) => {
  return axios
    .post(
      UPDATE_PROFILE_URL,
      {
        headers: {
          authorization: token,
        },
      },
      user
    )
    .then((res) => res.data)
    .then((data) => {
      return data.user;
    });
};
