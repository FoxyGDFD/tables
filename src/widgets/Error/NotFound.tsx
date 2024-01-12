import { FC } from 'react';
import { Typography } from 'simplify-dev';

export const NotFound: FC = () => {
  return (
    <Typography
      as='h2'
      className='text-grey-300 text-[50px] max-lg:text-[26px]'
    >
      Такой страницы не существует
    </Typography>
  );
};
