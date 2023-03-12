import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hook/redux.hook';
import { ILocationFilter } from '../../redux/redux.interface';
import { filterLocation } from '../../redux/slice/productslice';

const LocationFilter = () => {
  const locationFilter = useAppSelector((state) => state.product.locationFilter);
  const dispatch = useAppDispatch();

  const updateLocation = (e: React.ChangeEvent<HTMLInputElement>, item: ILocationFilter) => {
    dispatch(filterLocation({ location: item.location, clicked: e.target.checked }));
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        지역 선택
      </MenuButton>
      <MenuList>
        <MenuOptionGroup fontWeight="bold">
          <Stack pl={6} spacing={1}>
            {locationFilter.map((location, index) => (
              <Checkbox
                key={index}
                value={location.location}
                isChecked={location.clicked}
                onChange={(e) => updateLocation(e, location)}
              >
                {location.location}
              </Checkbox>
            ))}
          </Stack>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
export default LocationFilter;
