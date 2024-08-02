import { Flex, Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default function Header() {
  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex
      height={{ base: '72px' }}
      justifyContent='flex-end'
      alignItems='center'
      paddingInline="20px"
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label='dark mode button'
        children={<Icon as={colorMode !== 'light' ? FaSun : FaMoon} />}
      />
    </Flex>
  );
}
