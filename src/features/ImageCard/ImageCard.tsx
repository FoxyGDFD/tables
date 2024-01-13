import { BaseCard } from '@shared/cards';
import { FC } from 'react';

export const ImageCard: FC<{ img: string }> = ({ img }) => (
  <BaseCard className='w-full max-h-[216px] h-full grid place-content-center'>
    <img src={img} loading='lazy' className='max-h-[138px] object-cover' />
  </BaseCard>
);
