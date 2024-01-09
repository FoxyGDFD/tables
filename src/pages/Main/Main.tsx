import { ImageCard, PartitionCard } from '@features';
import { Section } from '@shared/cards';
import { Partition } from '@shared/store';
import { FC } from 'react';
import { Box } from 'simplify-dev';
import cuscovo from './assets/cuscovo.png';
import davidovsky from './assets/davidovsky.svg';
import miigaik from './assets/miigaik.svg';
import ntm from './assets/ntm.svg';
import rosArchive from './assets/ros-archive.svg';
import sections from './assets/sections.json' assert { type: 'json' };
import vitte from './assets/vitte.svg';

const images = [miigaik, cuscovo, rosArchive, davidovsky, vitte, ntm];

export const Main: FC = () => {
  return (
    <Box className='p-[26px]'>
      <Section
        title='Нам доверяют'
        className='grid grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-[16px] grid-flow-row'
      >
        {images.map((url: string, index: number) => (
          <ImageCard img={url} key={'image-' + index} />
        ))}
      </Section>
      <Section
        title='Мы изготавливаем'
        className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-[16px] grid-flow-row'
      >
        {sections.data.map((partition: Partition, index: number) => (
          <PartitionCard key={'card-' + index} {...partition} />
        ))}
      </Section>
    </Box>
  );
};
