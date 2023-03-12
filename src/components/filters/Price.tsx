import {
  Badge,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../redux/hook/redux.hook';
import { IPriceFilter, MAX_PRICE, PRICE_STEP, PRICE_STEPS } from '../../redux/redux.interface';
import { filterPrice } from '../../redux/slice/productslice';
import { formatCurrency } from '../../utils/formatCurrency';

const PriceFilter = () => {
  const priceFilter = useAppSelector((state) => state.product.priceFilter);

  const dispatch = useDispatch();
  const sliderChange = (priceRange: IPriceFilter) => {
    console.log('check', priceRange);
    dispatch(filterPrice(priceRange));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button ml={5} onClick={onOpen}>
        가격 범위
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="28px" fontWeight="800" mb="2px" mt="30px">
            가격 범위 설정
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mx={10} mb={5} flexDir={'column'}>
              <Text mb={5}>선택하신 가격 범위</Text>
              <RangeSlider
                w="full"
                aria-label={['min', 'max']}
                colorScheme="facebook" // 색상 바꾸기
                defaultValue={[priceFilter.min, priceFilter.max]}
                min={0}
                max={MAX_PRICE}
                step={PRICE_STEP}
                minStepsBetweenThumbs={10}
                onChangeEnd={(e) => {
                  sliderChange({ min: e[0], max: e[1] });
                }}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0}></RangeSliderThumb>
                <RangeSliderThumb index={1}></RangeSliderThumb>
              </RangeSlider>
              <Flex justifyContent={'space-between'}>
                {PRICE_STEPS.map((step, index) => {
                  return (
                    <Badge key={index} mt="5px" fontSize="sm" color="black">
                      ₩{formatCurrency(step)}
                    </Badge>
                  );
                })}
              </Flex>{' '}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PriceFilter;
