import { RequestButton } from '@features/index';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from 'simplify-dev';
import LightLogo from '../../assets/white-logo.svg?react';

interface NavbarProps {
  button?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ button }) => {
  const navigate = useNavigate();
  const toMain = () => navigate('/');

  return (
    <Box
      as='nav'
      className='flex flex-wrap gap-[10px] justify-between items-center pb-[90px] pt-[10px]'
    >
      <Button buttonType='text' onClick={toMain}>
        <LightLogo />
      </Button>
      {button && <RequestButton className='w-auto h-[40px]' />}
    </Box>
  );
};
