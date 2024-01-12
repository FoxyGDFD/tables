import { ImageCard } from '@features';
import { FC } from 'react';
import { Box, Typography } from 'simplify-dev';

interface ListProps {
  list: string[];
  className?: string;
  title?: string;
}

const getImageUrl = (url: string) =>
  window.location.origin +
  '/tables' +
  new URL(url.replace('/tables', ''), import.meta.url).pathname;

export const CardList: FC<ListProps> = ({ title, list, className }) => (
  <>
    {title && (
      <Typography as='h2' className='text-blue-500 font-medium mb-[24px]'>
        {title}
      </Typography>
    )}
    <Box
      className={
        className ||
        ' grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[16px] mt-[20px]'
      }
    >
      {list.map((url: string, index: number) => (
        <ImageCard
          img={getImageUrl(url).replace('/public', '')}
          key={'img-' + ' ' + index}
        />
      ))}
    </Box>
  </>
);
