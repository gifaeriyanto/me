import { Flex } from '@chakra-ui/core';
import { Footer } from '@components/footer';
import { Navbar } from '@components/navbar';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex
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
