import { CardList, Section } from '@shared/cards';
import { partitionTitleIndex } from '@shared/constants';
import { FC } from 'react';
import { Box, Typography } from 'simplify-dev';

interface PartitionProps {
  titles: string[];
  images: string[];
}

export const PartitionList: FC<PartitionProps> = ({ titles, images }) => (
  <Section title='Примеры выполненных заказов'>
    {titles.length > 1 ? (
      titles.map(title => (
        <Box as='article' key={title} className='mt-[32px]'>
          <Typography as='h4' className='font-medium'>
            {title}
          </Typography>
          <CardList
            list={images.filter(
              url => url.split('/')[partitionTitleIndex] === title
            )}
          />
        </Box>
      ))
    ) : (
      <CardList list={images} />
    )}
  </Section>
);
