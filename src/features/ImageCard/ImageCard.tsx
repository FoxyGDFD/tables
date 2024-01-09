import { BaseCard } from '@shared/cards';
import { FC } from 'react';

export const ImageCard: FC<{ img: string }> = ({ img }) => (
  <BaseCard className='w-full h-[120px] grid place-content-center'>
    <img src={img} />
  </BaseCard>
);
