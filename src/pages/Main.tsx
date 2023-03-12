import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import Product from '../components/Product';
import Filter from '../components/filters/Filter';

function Main() {
  return (
    <Flex flexDirection={'column'} mx={20} my={5}>
      <Flex w="full" flexDirection={'column'} mt={10}>
        <Filter />
        <Product />
      </Flex>
    </Flex>
  );
}

export default Main;
