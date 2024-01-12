import { FC, PropsWithChildren } from 'react';
import { Box, Typography } from 'simplify-dev';

interface SectionProps extends PropsWithChildren {
  className?: string;
  title?: string;
}

export const Section: FC<SectionProps> = ({ children, title, className }) => (
  <Box as='section' className='my-[100px] p-[26px]'>
    {title && (
      <Typography as='h2' className='text-blue-500 font-medium mb-[24px]'>
        {title}
      </Typography>
    )}
    <Box className={className}>{children}</Box>
  </Box>
);
