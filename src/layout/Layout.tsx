import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

function Layout() {
  return (
    <>
      <Flex flexDirection={'column'}>
        <Header />
      </Flex>
      <Outlet />
    </>
  );
}

export default Layout;
