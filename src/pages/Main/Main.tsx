import { PartitionCard, RequestButton } from '@features';
import { BaseCard, Section } from '@shared/cards';
import { Partition } from '@shared/store';
import { FC } from 'react';
import { Box, Typography } from 'simplify-dev';
import sections from './assets/sections.json' assert { type: 'json' };

export const Main: FC = () => {
  return (
    <Box>
      <Section
        title='Мы изготавливаем'
        className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-[16px] grid-flow-row'
      >
        {sections.data.map((partition: Partition, index: number) => (
          <PartitionCard key={'card-' + index} {...partition} />
        ))}
      </Section>
      <Section className='grid grid-cols-3 gap-[16px] max-lg:grid-cols-2 max-sm:grid-cols-1'>
        <BaseCard primary className='flex flex-col'>
          <Typography as='h3' className='text-white mb-[60px] font-medium'>
            Оставьте заявку
          </Typography>
          <Typography
            as='span'
            className='text-white text-[14px] mb-[24px] font-medium leading-[140%]'
          >
            Опишите идею и требования. В течение суток вы получите макеты на
            утверждение и стоимость изготовления
          </Typography>
          <RequestButton
            text='Отправить письмо'
            arrow
            className='max-w-[220px] text-nowrap'
          />
        </BaseCard>

        <BaseCard className='flex flex-col gap-[20px]'>
          <Typography as='h3' className='text-blue-500 font-medium'>
            Стоимость изготовления
          </Typography>
          <Box className='flex flex-col gap-[12px]'>
            <Box className='border-t-[1px] border-gray-400 flex justify-between pt-[12px]'>
              <Typography as='span' className='text-grey-400 font-semibold'>
                Табличка
              </Typography>
              <Typography as='span' className='text-grey-400 font-semibold'>
                200₽*
              </Typography>
            </Box>
            <Box className='border-t-[1px] border-gray-400 flex justify-between pt-[12px]'>
              <Typography as='span' className='text-grey-400 font-semibold'>
                Вывеска
              </Typography>
              <Typography as='span' className='text-grey-400 font-semibold'>
                2500₽*
              </Typography>
            </Box>
            <Box className='border-y-[1px] border-gray-400 flex justify-between py-[12px]'>
              <Typography as='span' className='text-grey-400 font-semibold'>
                Стенд
              </Typography>
              <Typography as='span' className='text-grey-400 font-semibold'>
                3000₽*
              </Typography>
            </Box>
          </Box>

          <Typography
            as='span'
            className='text-grey-400 text-[14px] leading-[140%]'
          >
            *Стоимость каждого изделия рассчитывается индивидуально исходя из ТЗ
            и материалов
          </Typography>
        </BaseCard>

        <BaseCard primary className='flex flex-col gap-[20px]'>
          <Typography as='h3' className='text-white font-medium'>
            Вызовите нас для
          </Typography>
          <Box className='flex flex-col gap-[12px]'>
            <Typography
              as='span'
              className='border-t-[1px] border-blue-100 pt-[12px] text-blue-100 font-semibold'
            >
              Согласования технического задания
            </Typography>
            <Typography
              as='span'
              className='border-t-[1px] border-blue-100 pt-[12px] text-blue-100 font-semibold'
            >
              Ознакомления с готовыми образцами
            </Typography>
            <Typography
              as='span'
              className='border-y-[1px] border-blue-100 py-[12px] text-blue-100 font-semibold'
            >
              Установки таблички “под ключ”*
            </Typography>
          </Box>

          <Typography
            as='span'
            className='text-blue-100 text-[14px] leading-[140%]'
          >
            *Дополнительная платная услуга.
            <br />
            Подробности уточняйте у менеджера
          </Typography>
        </BaseCard>
      </Section>
    </Box>
  );
};
