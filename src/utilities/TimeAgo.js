import { parseISO, formatDistanceToNow } from 'date-fns';

export const timeAgo = (timeStamp) => {
  let time = '';

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    time = `${timePeriod} ago`;
  }

  return time;
};
