import sections from '@pages/Main/assets/sections.json' assert { type: 'json' };
import { CardList, Section } from '@shared/cards';
import {
  Partition as PartitionHeaderProps,
  usePartialHeaderStore,
} from '@shared/store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from 'simplify-dev';

export const Partition = () => {
  const { pathname } = useLocation();

  const patrition = sections.data.find(
    ({ title }: PartitionHeaderProps) =>
      title === decodeURI(pathname?.substring(1))
  );
  const { setState, title } = usePartialHeaderStore();

  const glob = import.meta.glob('/src/widgets/Partition/assets/**/*');
  const images = Object.keys(glob).filter(name => {
    return name.split('/').includes(title || '');
  });

  const titles: string[] = [];
  images?.forEach(src => {
    const path = src.split('/');
    if (!titles.includes(path[7]) && path.includes('совмещенные разделы'))
      titles.push(path[7]);
  });

  useEffect(() => {
    if (patrition) setState(patrition);
  }, [patrition, setState]);

  return (
    <Section title='Примеры выполненных заказов'>
      {titles.length > 1 ? (
        titles.map(title => (
          <Box as='article' key={title} className='mt-[32px]'>
            <Typography as='h4' className='font-medium'>
              {title}
            </Typography>
            <CardList
              list={images.filter(url => url.split('/')[7] === title)}
            />
          </Box>
        ))
      ) : (
        <CardList list={images} />
      )}
    </Section>
  );
};
