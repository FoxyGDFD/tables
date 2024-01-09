import Arrow from '@features/PartitionCard/assets/arrow.svg?react';
import { FC } from 'react';
import { Button } from 'simplify-dev';

interface RequestButtonProps {
  className?: string;
  text?: string;
  arrow?: boolean;
}

const getClassName = (className: string) =>
  'text-blue-500 bg-grey-50 ' + className;

export const RequestButton: FC<RequestButtonProps> = ({
  text,
  className,
  arrow,
}) => {
  return (
    <Button
      as='a'
      href='mailto:litan777@yandex.ru'
      className={getClassName(className || '')}
    >
      {text || 'Оставить заявку'}
      {arrow && (
        <Arrow className='fill-blue-500  animate-hbounce ml-[12px] w-[18px]' />
      )}
    </Button>
  );
};
