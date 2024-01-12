import { BaseCard } from '@shared/cards';
import { Partition, usePartialHeaderStore } from '@shared/store';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from 'simplify-dev';
import Arrow from './assets/arrow.svg?react';

export const PartitionCard: FC<Partition> = ({ title, desctiption }) => {
  const { setState } = usePartialHeaderStore();
  const navigate = useNavigate();

  const onClick = () => {
    setState({ title, desctiption });
    navigate(title ? `${encodeURI(title)}` : '/not-found');
  };

  return (
    <BaseCard className='flex flex-col gap-[16px] w-full'>
      <Typography className='font-medium text-[22px]'>{title}</Typography>
      <Box className='flex gap-[16px] justify-between h-full'>
        <Typography as='span' className='text-[14px] text-grey-500  self-end'>
          {desctiption}
        </Typography>
        <Button
          buttonType='text'
          onClick={onClick}
          className='hover:animate-hbounce rounded-full border-[2px] border-grey-300 p-0 h-[28px] w-[28px] self-end'
        >
          <Arrow className='fill-grey-600 w-[24px]' />
        </Button>
      </Box>
    </BaseCard>
  );
};
