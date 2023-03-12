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
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../redux/hook/redux.hook';
import { ICart } from '../redux/redux.interface';
import { decrease, increase, remove } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';
import EmptyCart from './EmptyReservation';

function Reservation() {
  const cartList = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const increaseProduct = (item: ICart) => {
    dispatch(increase(item));
  };

  const decreaseProduct = (item: ICart) => {
    if (item.count == 1) {
      dispatch(remove(item.idx));
    }
    dispatch(decrease(item));
  };

  const deleteProduct = (idx: number) => {
    dispatch(remove(idx));
  };

  return (
    <>
      {cartList.length !== 0 ? (
        <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
          <Flex marginBottom="5">
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
                  <Button onClick={() => decreaseProduct(item)} variant="solidx" colorScheme="gray">
                    -
                  </Button>
                  <Text marginInline="8">{item.count}</Text>
                  <Button onClick={() => increaseProduct(item)} variant="solidx" colorScheme="gray">
                    +
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Flex>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Reservation;
