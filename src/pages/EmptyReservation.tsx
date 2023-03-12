import { Flex, Heading } from '@chakra-ui/react';

function EmptyCart() {
  return (
    <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
      <Heading>예약 내역</Heading>
      <Heading size={'md'} my="10">
        장바구니가 비어있습니다.
      </Heading>
    </Flex>
  );
}

export default EmptyCart;
