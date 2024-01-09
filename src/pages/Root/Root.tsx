import { usePartialHeaderStore } from '@shared/store';
import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from 'simplify-dev';
import { Footer, MainHeader, PartitionHeader } from './ui';

export const Root: FC = () => {
  const path = useLocation().pathname;
  const { title, desctiption } = usePartialHeaderStore();

  return (
    <>
      {path === '/' ? (
        <MainHeader />
      ) : (
        <PartitionHeader title={title} desctiption={desctiption} />
      )}
      <Box as='main' className='sm:px-[32px] max-w-pc mx-auto grow-1 h-full'>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
