import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Cart from './cart/Cart';

function Header() {
  return (
    <Flex
      px={20}
      flexDirection="row"
      alignItems={'center'}
      backgroundColor="brand.main"
      justifyContent={'space-between'}
    >
      <Heading as={Link} to="/main" my={3} color="brand.main" textColor={'white'}>
        Like a LOCAL
      </Heading>
      <Cart />
    </Flex>
  );
}

export default Header;
