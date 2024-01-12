import { Partition } from '@shared/store';
import { FC } from 'react';
import { Box, Typography } from 'simplify-dev';
import { Navbar } from './ui/Navbar';

export const PartitionHeader: FC<Partition> = ({ title, desctiption }) => {
  return (
    <Box as='header' className='bg-blue-600 sm:px-[32px] pb-[80px] px-20'>
      <Box className='max-w-pc mx-auto'>
        <Navbar button />
        <Box className='grid grid-cols-6 max-xl:grid-cols-4 max-sm:grid-cols-3 grid-flow-row gap-[36px]'>
          <Typography
            as='h1'
            className='col-span-3 max-xl:col-span-3 col-end-4 text-white w-full text-[54px] font-semibold max-sm:text-[36px]'
          >
            {title || 'Такой страницы не существует'}
          </Typography>
          <Typography
            as='h3'
            className='col-span-3 col-end-4 max-xl:col-span-3 text-white opacity-80 font-medium'
          >
            {desctiption}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
