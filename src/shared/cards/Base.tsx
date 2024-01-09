import { BGProps } from '@widgets/types';
import { FC, PropsWithChildren } from 'react';
import { Box } from 'simplify-dev';

const defaultStyles = 'p-20 rounded-12';
const getClassName = (primary: boolean, className: string) =>
  primary
    ? defaultStyles + ' ' + className + ' bg-blue-600'
    : defaultStyles + ' ' + className + ' bg-grey-100';

export const BaseCard: FC<PropsWithChildren & BGProps> = ({
  primary,
  className,
  children,
}) => {
  return (
    <Box className={getClassName(primary || false, className || '')}>
      {children}
    </Box>
  );
};
