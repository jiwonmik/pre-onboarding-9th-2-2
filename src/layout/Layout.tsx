import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';

function Layout() {
  return (
    <>
      <Flex flexDirection={'column'}>
        <Header />
      </Flex>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={2}
      />
      <Outlet />
    </>
  );
}

export default Layout;
