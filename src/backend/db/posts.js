import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
import default_profile from 'assets/images/default_profile.jpg';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    image: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        userId: 1,
        text: 'Interesting',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        userId: 2,
        text: 'Wow!',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    // username: "adarshbalika",
    user_id: 1,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    image: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        userId: 1,
        text: 'Interesting',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        userId: 2,
        text: 'Wow!',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    // username: "adarshbalika",
    user_id: 2,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.',
    image: '',
    likes: {
      likeCount: 6,
      likedBy: [
        {
          // _id: uuid(),
          _id: 1,
          username: 'adarshbalika',
          nickname: '@adarshbalika',
          email: 'adarshbalika@gmail.com',
          password: 'adarshbalika',
          profile: default_profile,
          describtion: '',
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
          bookmarks: [],
        },
        {
          // _id: uuid(),
          _id: 2,
          username: 'SnickerDev',
          nickname: '@snicker',
          email: 'snicker@gmail.com',
          password: 'snicker123',
          profile:
            'https://images.unsplash.com/photo-1654720481565-da499168f9f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          describtion: '',
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
          bookmarks: [],
        },
        {
          // _id: uuid(),
          _id: 3,
          username: 'Sohan',
          nickname: '@sohan',
          email: 'sohan@gmail.com',
          password: 'sohan123',
          profile:
            'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          describtion: '',
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
          bookmarks: [],
        },
        {
          // _id: uuid(),
          _id: 4,
          username: 'Lancer',
          nickname: '@lancer',
          email: 'lancer@gmail.com',
          password: 'sohan123',
          profile:
            'https://images.unsplash.com/photo-1616451189762-da6f909f8154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          describtion: '',
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
          bookmarks: [],
        },
        {
          // _id: uuid(),
          _id: 5,
          username: 'Arjun',
          nickname: '@arjun',
          email: 'arjun@gmail.com',
          password: 'sohan123',
          profile:
            'https://images.unsplash.com/photo-1654720110542-dddee085756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          describtion: '',
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
          bookmarks: [],
        },
        {
          // _id: uuid(),
          _id: 6,
          username: 'Aditi',
          nickname: '@aditi',
          email: 'aditi@gmail.com',
          password: 'sohan123',
          profile:
            'https://images.unsplash.com/photo-1654714040402-4f43178195f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          describtion: '',
          createdAt: formatDate(),
          updatedAt: formatDate(),
          followers: [],
          following: [],
          bookmarks: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        userId: 1,
        text: 'Interesting',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        userId: 2,
        text: 'Wow!',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    user_id: 3,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
