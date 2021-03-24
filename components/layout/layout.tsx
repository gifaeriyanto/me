import { Flex } from '@chakra-ui/react';
import { Footer } from '@components/footer';
import { Navbar } from '@components/navbar';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex
        as="main"
        px="30px"
        pt="90px"
        minH="calc(100vh - 90px)"
        flexDirection="column"
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};
