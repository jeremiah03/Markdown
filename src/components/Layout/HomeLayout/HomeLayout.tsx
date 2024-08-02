import { Flex } from '@chakra-ui/react';
import Header from '../../Elements/Header/Header';

type HomeLayoutProps = {
  children?: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Flex
      direction={'column'}
      marginInline='40px'
    >
      <Header />
      {children}
    </Flex>
  );
}
