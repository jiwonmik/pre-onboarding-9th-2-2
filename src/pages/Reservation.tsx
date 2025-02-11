import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../redux/hook/redux.hook';
import { ICart } from '../redux/redux.interface';
import { decrease, increase, remove } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';
import EmptyCart from './EmptyReservation';

function Reservation() {
  const cartList = useAppSelector((state) => state.cart);
  const totalCost = Object.values(cartList).reduce((a, b) => a + b.count * b.price, 0);

  const dispatch = useAppDispatch();

  const increaseProduct = (item: ICart) => {
    dispatch(increase(item));
  };

  const decreaseProduct = (item: ICart) => {
    if (item.count == 1) {
      return;
    }
    dispatch(decrease(item));
  };

  const deleteProduct = (idx: number) => {
    dispatch(remove(idx));
  };

  return (
    <>
      {cartList.length !== 0 ? (
        <Flex flexDir={'column'} alignItems={'center'} marginTop="10">
          <Flex flexDir={'column'} justifyContent={'center'}>
            <Flex justifyContent={'center'} mb="5">
              <Heading>예약 내역</Heading>
            </Flex>
            {cartList.map((item, index) => (
              <Card
                key={index}
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidxden"
                variant="outline"
                width="600px"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={item.mainImage}
                  alt="Caffe Latte"
                />
                <Stack width="100%">
                  <CardBody>
                    <Flex flexDir="row" justifyContent="space-between" alignItems="center">
                      <Heading size="md">{item.name}</Heading>
                      <Button
                        onClick={() => deleteProduct(item.idx)}
                        colorScheme="teal"
                        variant="ghost"
                      >
                        X
                      </Button>
                    </Flex>
                    <Text py="2">{item.description}</Text>
                    <Text fontWeight="extrabold">{formatCurrency(item.count * item.price)}원</Text>
                  </CardBody>

                  <CardFooter justifyContent="center" alignItems="center">
                    <Button
                      onClick={() => decreaseProduct(item)}
                      variant="solidx"
                      colorScheme="gray"
                    >
                      -
                    </Button>
                    <Text marginInline="8">{item.count}</Text>
                    <Button
                      onClick={() => increaseProduct(item)}
                      variant="solidx"
                      colorScheme="gray"
                    >
                      +
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))}
          </Flex>
          <Flex justifyContent={'center'} my="5">
            <Heading size={'md'}>Total: ₩{formatCurrency(totalCost)}</Heading>
          </Flex>
        </Flex>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Reservation;
