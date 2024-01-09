import { RequestButton } from '@features/index';
import { FC } from 'react';
import { Box } from 'simplify-dev';
import LightLogo from '../../assets/white-logo.svg?react';

interface NavbarProps {
  button?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ button }) => (
  <Box
    as='nav'
    className='flex flex-wrap gap-[10px] justify-between items-center pb-[90px] pt-[10px]'
  >
    <LightLogo />
    {button && <RequestButton className='w-auto h-[40px]' />}
  </Box>
);
