import usrProfile from '../assets/images/profile-1.jpg';
import { FiCamera } from 'react-icons/fi';

export const PostForm = () => {
  return (
    <form className='create-post-form'>
      <div className='form-head'>
        <div className='profile-photo'>
          <img src={usrProfile} alt='profile picture' />
        </div>
        <div className='user-info'>
          <h4 className='username'>Diana Ayi</h4>
          <p className='user-@'>@dayi</p>
        </div>
      </div>
      <div className='form-body'>
        <textarea
          className='post-text-input'
          placeholder="what's on you mind, Diana ?"
        />
        <input
          className='post-image-input'
          type='url'
          placeholder='Like to share some picture memories ?'
        />
      </div>
      <div className='form-footer'>
        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </div>
    </form>
  );
};
