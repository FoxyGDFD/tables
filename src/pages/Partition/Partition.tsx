import sections from '@pages/Main/assets/sections.json' assert { type: 'json' };
import {
  Partition as PartitionHeaderProps,
  usePartialHeaderStore,
} from '@shared/store';
import { NotFound, PartitionList } from '@widgets';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// В структуре папок с изображениями под 5 индексом находятся названия разделов для страниц с совмещёнными разделами
export const partitionTitleIndex = 5;

export const Partition: FC = () => {
  const { pathname } = useLocation();
  const patrition = sections.data.find(
    ({ title }: PartitionHeaderProps) =>
      title === decodeURI(pathname?.split('/')[1])
  );
  const { setState, title } = usePartialHeaderStore();

  const glob = Object.keys(
    import.meta.glob('/**/*.{png,jpg,jpeg,PNG,JPEG}', {
      eager: true,
    })
  );
  const images = glob.filter(name => {
    return name.split('/').includes(title || '');
  });

  const titles: string[] = [];
  images?.forEach(src => {
    const path = src.split('/');
    const partitionTitle = path[partitionTitleIndex];
    if (
      !titles.includes(partitionTitle) &&
      path.includes('совмещенные разделы')
    )
      titles.push(partitionTitle);
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
