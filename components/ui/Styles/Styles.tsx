import { Fern } from '@icons';
import { Flex } from '@ui';
import { StyledFernLeft, StyledFernRight } from './Styled.styles';

export const Styles = () => {
  return (
    <>
      <Flex className={StyledFernLeft}>
        <Fern />
      </Flex>
      <Flex className={StyledFernRight}>
        <Fern />
      </Flex>
    </>
  );
};
