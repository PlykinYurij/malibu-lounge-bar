import { RULES } from '@data/menu';
import { Age18, Alco, Hookah } from '@icons';
import { Flex, Section, Text } from '@ui';
import { useTranslations } from 'next-intl';

const Icons: Record<string, () => React.JSX.Element> = {
  alco: Alco,
  age: Age18,
  time: Hookah,
};

export const Rules = () => {
  const t = useTranslations();
  return (
    <Section id={'rules'} title={t('sections.rules.title')} isStyled>
      <Flex
        direction={'column'}
        gap={'xl'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {RULES.map(({ id, description }) => {
          const Icon = Icons[id];
          return (
            <Flex key={id} gap={'m'} alignItems={'center'}>
              {Icon && <Icon />}
              <Text textAlight={'center'}>{description}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Section>
  );
};
