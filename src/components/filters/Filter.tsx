import { Flex } from '@chakra-ui/react';

import LocationFilter from './Location';
import PriceFilter from './Price';

function Filter() {
  return (
    <Flex flexDir={'row'} width="full" mb={8}>
      <LocationFilter />
      <PriceFilter />
    </Flex>
  );
}

export default Filter;
