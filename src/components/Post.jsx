import profile_1 from '../assets/images/profile-2.jpg';
import profile_2 from '../assets/images/profile-3.jpg';
import profile_3 from '../assets/images/profile-4.jpg';
import profile_4 from '../assets/images/profile-5.jpg';
import profile_5 from '../assets/images/profile-6.jpg';
import post_1 from '../assets/images/feed-1.jpg';
import {
  FiMoreVertical,
  FiMoreHorizontal,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiBookmark,
} from 'react-icons/fi';

export const Post = () => {
  return (
    <div className='feed'>
      <div className='head'>
        <div className='user'>
          <div className='profile-photo'>
            <img src={profile_2} alt='profile picture' />
          </div>
          <div className='user-info'>
            <h3>Lana Rose</h3>
            <small>@lana , 15 minutes ago </small>
          </div>
        </div>
        <span className='edit'>
          <FiMoreHorizontal />
        </span>
      </div>
      <div className='post'>
        <p className='post-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          cupiditate eius nihil delectus aliquam cum assumenda? Quo pariatur ad
          vero omnis, asperiores error itaque eius, possimus est aliquid esse
          at.
        </p>
        <img className='post-image' src={post_1} alt='' />
      </div>
      <div className='action-buttons'>
        <div className='interaction-buttons'>
          <span>
            <FiHeart />
          </span>
          <span>
            <FiMessageCircle />
          </span>
          <span>
            <FiShare2 />
          </span>
        </div>
        <div className='bookmark'>
          <span>
            <FiBookmark />
          </span>
        </div>
      </div>
      <div className='liked-by'>
        <span>
          <img src={profile_3} alt='' />
        </span>
        <span>
          <img src={profile_4} alt='' />
        </span>
        <span>
          <img src={profile_5} alt='' />
        </span>
        <p>
          Liked by <b>Ernest Archiever</b> and <b>2, 323 others</b>
        </p>
      </div>
      <div className='caption'>
        <p>
          Lana Rose Lorem ipsum dolor sit quisquam eius.
          <span className='hash-tag'>#lifestyle</span>
        </p>
      </div>
      <div className='text-muted'>View all 277 comments</div>
      <div className='comments hide'>
        <div className='comment'>
          <div className='profile-photo'>
            <img src={profile_1} alt='profile picture' />
          </div>
          <p className='comment-text'>
            <span className='comment-username'>
              <b>@lancer</b> &nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
            illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
            Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
            quibusdam laborum!
          </p>
          <div className='comment-option'>
            <FiMoreVertical />
          </div>
        </div>
        <hr className='comment-divider' />
        <div className='comment'>
          <div className='profile-photo'>
            <img src={profile_1} alt='profile picture' />
          </div>
          <p className='comment-text'>
            <span className='comment-username'>
              <b>@lancer</b> &nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
            illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
            Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
            quibusdam laborum!
          </p>
          <div className='comment-option'>
            <FiMoreVertical />
          </div>
        </div>
        <hr className='comment-divider' />
        <div className='comment'>
          <div className='profile-photo'>
            <img src={profile_1} alt='profile picture' />
          </div>
          <p className='comment-text'>
            <span className='comment-username'>
              <b>@lancer</b> &nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
            illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
            Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
            quibusdam laborum!
          </p>
          <div className='comment-option'>
            <FiMoreVertical />
          </div>
        </div>
        <hr className='comment-divider' />
        <div className='comment'>
          <div className='profile-photo'>
            <img src={profile_1} alt='profile picture' />
          </div>
          <p className='comment-text'>
            <span className='comment-username'>
              <b>@lancer</b> &nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
            illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
            Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
            quibusdam laborum!
          </p>
          <div className='comment-option'>
            <FiMoreVertical />
          </div>
        </div>
        <hr className='comment-divider' />
        <div className='comment'>
          <div className='profile-photo'>
            <img src={profile_1} alt='profile picture' />
          </div>
          <p className='comment-text'>
            <span className='comment-username'>
              <b>@lancer</b> &nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
            illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
            Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
            quibusdam laborum!
          </p>
          <div className='comment-option'>
            <FiMoreVertical />
          </div>
        </div>
        <hr className='comment-divider' />
        <div className='comment'>
          <div className='profile-photo'>
            <img src={profile_1} alt='profile picture' />
          </div>
          <p className='comment-text'>
            <span className='comment-username'>
              <b>@lancer</b> &nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
            illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
            Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
            quibusdam laborum!
          </p>
          <div className='comment-option'>
            <FiMoreVertical />
          </div>
        </div>
        <hr className='comment-divider' />
      </div>
    </div>
  );
};
