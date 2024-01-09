import { FC } from 'react';
import { Box, Button } from 'simplify-dev';
import LightLogo from '../../assets/white-logo.svg?react';

interface NavbarProps {
  button?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ button }) => (
  <Box
    as='nav'
    className='flex justify-between items-center pb-[90px] pt-[10px]'
  >
    <LightLogo />
    {button && (
      <Button
        as='a'
        className='text-blue-500 bg-grey-50 max-w-[180px] h-[40px] rounded-8 font-medium'
      >
        Оставить заявку
      </Button>
    )}
  </Box>
);
