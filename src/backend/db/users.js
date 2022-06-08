import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    username: 'adarshbalika',
    nickname: '@adarshbalika',
    email: 'adarshbalika@gmail.com',
    password: 'adarshbalika',
    profile: '',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: 'SnickerDev',
    nickname: '@snicker',
    email: 'snicker@gmail.com',
    password: 'snicker123',
    profile: '',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: 'Sohan Shetty',
    nickname: '@sohan',
    email: 'sohan@gmail.com',
    password: 'sohan123',
    profile: '',
    describtion: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
