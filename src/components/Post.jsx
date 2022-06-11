import { PostEditForm, PostPreview } from './all';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from 'features/users/usersSlice';

export const Post = ({ post }) => {
  const [postEditState, setPostEditState] = useState(false);
  const { user_id } = post;
  const allUsers = useSelector(selectAllUsers);

  const author = allUsers.find((user) => user._id === user_id);

  const data = {
    post: post,
    author: author,
    postEditState: postEditState,
    setPostEditState: setPostEditState,
  };

  return postEditState ? <PostEditForm {...data} /> : <PostPreview {...data} />;
};
