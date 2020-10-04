import { Box, Flex, Text } from '@chakra-ui/core';
import { routes } from '@utils/routes';
import Link from 'next/link';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <Box pos="fixed" top={0} left={0} w="100%" bgColor="#fff" p="25px 40px">
      <Flex justify="space-between" align="center">
        <Link href={routes.home}>
          <a>
            <Text fontSize="26px">Gifa Eriyanto</Text>
          </a>
        </Link>
        <Text fontSize="26px">===</Text>
      </Flex>
    </Box>
  );
};
