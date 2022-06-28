import { PostEditForm, PostPreview } from './all';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from 'features/users/usersSlice';
import { selectCurrentUser } from 'features/auth/authSlice';

export const Post = ({ post }) => {
  const [postEditState, setPostEditState] = useState(false);
  const { user_id } = post;

  const user = useSelector(selectCurrentUser);

  const author = useGetUserQuery(user_id).data?.user;

  const currentUser = useGetUserQuery(user._id).data?.user;

  const data = {
    post: post,
    author: author,
    postEditState: postEditState,
    setPostEditState: setPostEditState,
    user: currentUser,
  };

  return postEditState ? <PostEditForm {...data} /> : <PostPreview {...data} />;
};
