import { FiEdit2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentToken,
  updateUser,
} from 'features/auth/authSlice';
import { useEffect, useRef, useState } from 'react';
import { updateProfile } from 'api/updateProfile';
import { useDispatch } from 'react-redux';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const NICK_REGEX = /^[@][A-z0-9-_]{3,12}$/;

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const [formEdit, setFormEdit] = useState(false);

  const [errMsg, setErrMsg] = useState({
    status: false,
    msg: '',
  });

  const {
    bookmarks,
    createdAt,
    describtion,
    email,
    followers,
    following,
    id,
    nickname,
    password,
    profile,
    updatedAt,
    username,
    _id,
  } = user;

  const usernameInput = useRef();
  const nicknameInput = useRef();
  const emailInput = useRef();
  const profileInput = useRef();
  const describtionInput = useRef();

  useEffect(() => {
    usernameInput.current.value = username;
    nicknameInput.current.value = nickname;
    emailInput.current.value = email;
    profileInput.current.value = profile;
    describtionInput.current.value = describtion;
  }, [user]);

  const validateUsername = () => {
    if (
      USER_REGEX.test(usernameInput.current.value) ||
      usernameInput.current.value === ''
    ) {
      usernameInput.current.setCustomValidity('');
    } else {
      usernameInput.current.setCustomValidity(
        '4 to 24 characters.\nMust begin with a letter.\nLetters, numbers, underscores, hyphens allowed.'
      );
    }
  };

  const validateNickname = () => {
    if (
      NICK_REGEX.test(nicknameInput.current.value) ||
      nicknameInput.current.value === ''
    ) {
      nicknameInput.current.setCustomValidity('');
    } else {
      nicknameInput.current.setCustomValidity(
        '4 to 12 characters.\nMust begin with "@".\nLetters, numbers, underscores, hyphens allowed.'
      );
    }
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    const editedUserProfile = {
      ...user,
      username: usernameInput.current.value,
      nickname: nicknameInput.current.value,
      email: emailInput.current.value,
      profile: profileInput.current.value,
      describtion: describtionInput.current.value,
    };

    console.log(editedUserProfile);

    updateProfile(editedUserProfile, token)
      .then((user) => {
        console.log('updated user ', user);
        // dispatch(updateUser(user));
      })
      .catch((error) => {
        console.log(error.message);
        setErrMsg({ status: true, msg: error.message });
      });

    dispatch(updateUser(editedUserProfile));
    setFormEdit(false);
  };

  return (
    <>
      <div className='edit-icon-container'>
        <button
          className={
            formEdit
              ? 'btn btn-primary edit-btn hide'
              : 'btn btn-primary edit-btn'
          }
          onClick={() => {
            setFormEdit(true);
          }}
        >
          <FiEdit2 />
        </button>
      </div>

      <form
        className={formEdit ? 'form edit' : 'form'}
        onSubmit={onSubmitHandler}
        onChange={() => {
          setErrMsg({ status: false, msg: '' });
        }}
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
            ref={usernameInput}
            required
            readOnly={!formEdit}
            onChange={validateUsername}
          />
        </label>
        <label htmlFor='nickname' className='auth-label'>
          @Nickname<span className='imp-mark'>*</span>
          <br />
          <input
            type='text'
            id='nickname'
            className='auth-input'
            placeholder='Nickname'
            ref={nicknameInput}
            required
            readOnly={!formEdit}
            onChange={validateNickname}
          />
        </label>
        <label htmlFor='email' className='auth-label'>
          Email<span className='imp-mark'>*</span>
          <br />
          <input
            type='email'
            id='email'
            className='auth-input'
            placeholder='Email'
            ref={emailInput}
            required
            readOnly={!formEdit}
          />
        </label>
        <label htmlFor='profile-photo' className='auth-label'>
          Profile Photo
          <br />
          <input
            type='url'
            id='profile-photo'
            className='auth-input'
            placeholder='profile photo link'
            ref={profileInput}
            readOnly={!formEdit}
          />
        </label>
        <label htmlFor='description' className='auth-label'>
          Describtion Yourself
          <br />
          <textarea
            id='description'
            className='auth-input describtion'
            placeholder='Description'
            ref={describtionInput}
            readOnly={!formEdit}
            maxLength='180'
          />
        </label>
        <button className='btn btn-primary submit-btn' type='submit'>
          Save Changes
        </button>
      </form>
    </>
  );
};

/*
bookmarks: []
createdAt: "2022-06-07T17:16:22+05:30"
describtion: ""
email: "adarshbalika@gmail.com"
followers: []
following: []
id: "1"
nickname: "@adarshbalika"
password: "adarshbalika"
profile: ""
updatedAt: "2022-06-07T17:16:22+05:30"
username: "adarshbalika"
_id: "474d7280-200c-41e5-a1ee-a63d54d0efea" 
*/
