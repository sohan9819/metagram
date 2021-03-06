import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
import default_profile from 'assets/images/default_profile.jpg';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
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
    username: 'Abhiram',
    nickname: '@abhiram',
    email: 'abhiram@gmail.com',
    password: 'sohan123',
    profile:
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    // _id: uuid(),
    _id: 7,
    username: 'Manish',
    nickname: '@manish',
    email: 'manish@gmail.com',
    password: 'sohan123',
    profile:
      'https://images.unsplash.com/photo-1612956946912-b2d8e5fd65a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0cyUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    // _id: uuid(),
    _id: 8,
    username: 'Akhil',
    nickname: '@akhil',
    email: 'akhil@gmail.com',
    password: 'sohan123',
    profile:
      'https://images.unsplash.com/photo-1561551331-7d7e8fd7ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    // _id: uuid(),
    _id: 9,
    username: 'Vinit',
    nickname: '@vinit',
    email: 'vinit@gmail.com',
    password: 'sohan123',
    profile:
      'https://images.unsplash.com/photo-1654714527739-f852325b8185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    // _id: uuid(),
    _id: 10,
    username: 'Vishnu',
    nickname: '@vishnu',
    email: 'vishnu@gmail.com',
    password: 'sohan123',
    profile:
      'https://images.unsplash.com/photo-1549958909-db7599598400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    // _id: uuid(),
    _id: 11,
    username: 'Abhilash',
    nickname: '@abhilash',
    email: 'abhilash@gmail.com',
    password: 'sohan123',
    profile:
      'https://images.unsplash.com/photo-1556036325-3c44d0705d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
];
