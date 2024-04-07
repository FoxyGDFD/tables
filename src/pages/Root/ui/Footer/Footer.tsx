import { FC } from 'react';
import { Box, Button, Typography } from 'simplify-dev';
import DarkLogo from '../assets/dark-logo.svg?react';

const column = 'flex flex-col col-span-1';

export const Footer: FC = () => {
  return (
    <Box
      as='footer'
      role='contentinfo'
      className='sm:px-[32px] w-full max-w-pc mx-auto p-[26px] border-t-2 border-grey-400 grid grid-cols-6 gap-[12px] max-lg:grid-cols-3 max-md:grid-cols-1'
    >
      <DarkLogo className='col-span-2 max-md:col-span-1 w-full max-w-[290px]' />
      <Box className={column}>
        <Typography as='h6'>Телефон</Typography>
        <Button
          as='a'
          className='p-0'
          buttonType='text'
          href='tel:+7 (926) 052-11-99'
        >
          +7 (926) 052-11-99
        </Button>
      </Box>
      <Box className={column}>
        <Typography as='h6'>Почта</Typography>
        <Button
          as='a'
          className='p-0'
          buttonType='text'
          href='mailto:litan777@yandex.ru'
        >
          litan777@yandex.ru
        </Button>
      </Box>
      <Box className={column + ' col-span-2 max-md:col-span-1'}>
        <Typography as='h6'>Адреса</Typography>
        <Typography as='span' className='sm:text-nowrap'>
          Москва, Наставнический переулок, 6
        </Typography>
      </Box>
    </Box>
  );
};
