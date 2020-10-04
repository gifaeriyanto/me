import { Box, Container } from '@chakra-ui/core';
import { Navbar } from '@components/navbar';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box pt="90px" h="calc(100vh - 90px)">
        <Container maxW="lg">{children}</Container>
      </Box>
    </>
  );
};
