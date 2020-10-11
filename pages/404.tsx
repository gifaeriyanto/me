import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import { Typing } from '@components/typing';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="404" description="Page not found" />

      <Flex justify="center" align="center" direction="column" flex="1">
        <Heading
          as="h1"
          fontSize="xl"
          color="highlight"
          gridColumn={[1, null, 2]}
        >
          <Typing text="404" id="404-title-page" />
        </Heading>
        <Text>Page not found</Text>
      </Flex>
    </>
  );
};

export default Index;
