import { FiEdit2 } from 'react-icons/fi';

export const ProfileForm = () => {
  return (
    <>
      <div className='edit-icon-container'>
        <button className='btn btn-primary edit-btn'>
          <FiEdit2 />
        </button>
      </div>

      <form class='form'>
        <label for='username' class='auth-label'>
          Username<span class='imp-mark'>*</span>
          <br />
          <input
            type='text'
            id='username'
            class='auth-input'
            placeholder='Email Address'
            required
          />
        </label>
        <label for='nickname' class='auth-label'>
          @Nickname<span class='imp-mark'>*</span>
          <br />
          <input
            type='text'
            id='nickname'
            class='auth-input'
            placeholder='Email Address'
            required
          />
        </label>
        <label for='email' class='auth-label'>
          Email<span class='imp-mark'>*</span>
          <br />
          <input
            type='email'
            id='email'
            class='auth-input'
            placeholder='Email Address'
            required
            readOnly
          />
        </label>
        <label for='profile-photo' class='auth-label'>
          Profile Photo<span class='imp-mark'>*</span>
          <br />
          <input
            type='url'
            id='profile-photo'
            class='auth-input'
            placeholder='Email Address'
            required
          />
        </label>
        <label for='profile-photo' class='auth-label'>
          Describe Yourself<span class='imp-mark'>*</span>
          <br />
          <input
            type='url'
            id='profile-photo'
            class='auth-input'
            placeholder='Description'
            required
          />
        </label>
        <button class='btn btn-primary submit-btn' type='submit'>
          Save Changes
        </button>
      </form>
    </>
  );
};
