import sections from '@pages/Main/assets/sections.json' assert { type: 'json' };
import {
  Partition as PartitionHeaderProps,
  usePartialHeaderStore,
} from '@shared/store';
import { NotFound, PartitionList } from '@widgets';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Partition: FC = () => {
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
    setState(patrition || { title: 'Такой страницы не существует' });
  }, [patrition, setState]);

  return (
    <>
      {title !== 'Такой страницы не существует' ? (
        <PartitionList titles={titles} images={images} />
      ) : (
        <NotFound />
      )}
    </>
  );
};
