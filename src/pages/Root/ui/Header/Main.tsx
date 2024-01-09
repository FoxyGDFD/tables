import { RequestButton } from '@features';
import { CSSProperties, FC } from 'react';
import { Box, Typography } from 'simplify-dev';
import bgImage from '../assets/bg.png';
import { Navbar } from './ui/Navbar';

export const MainHeader: FC = () => {
  return (
    <Box
      as='header'
      style={{ '--bg-url': `url(${bgImage})` } as CSSProperties}
      className='bg-[image:var(--bg-url)] bg-cover bg-center sm:px-[32px] pb-[80px] px-20'
    >
      <Box className='max-w-pc mx-auto'>
        <Navbar />
        <Box className='grid grid-cols-6 max-xl:grid-cols-4 max-sm:grid-cols-3 grid-flow-row gap-[36px]'>
          <Typography
            as='h1'
            className='col-span-3 max-xl:col-span-3 col-end-4 text-white w-full text-[54px] font-semibold max-sm:text-[36px]'
          >
            Качественные таблички для вашего бизнеса
          </Typography>
          <Typography
            as='h3'
            className='col-span-3 col-end-4 max-xl:col-span-3 text-white opacity-80 font-medium'
          >
            Производим внутреннюю и наружную рекламу, вывески, указатели,
            таблички и стенды
          </Typography>
          <RequestButton className='col-span-1 sm:w-[180px] max-xl:col-span-2 max-sm:col-span-3 max-sm:col-end-4 col-end-2 rounded-8 font-medium' />
        </Box>
      </Box>
    </Box>
  );
};
