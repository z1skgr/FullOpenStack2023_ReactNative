import { format } from 'date-fns'

export const kFormat = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

export const parseDate = (dateString) => {
  const dateObject = new Date(dateString);
  const formattedDate = format(dateObject, 'MMMM dd, yyyy');
  return formattedDate
};