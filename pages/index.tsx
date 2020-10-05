import {
  Box,
  Button,
  Container,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/core';
import { Layout } from '@components/layout';
import { Typing } from '@components/typing';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Gifa Eriyanto"
        description="I'm an experienced software engineer from Indonesia who focuses on
      Frontend Web Development."
      />

      <Layout>
        <Container
          maxW="md"
          flex="1"
          d="flex"
          justifyContent="center"
          alignItems="center"
          minH="100%"
        >
          <Box>
            <Text fontSize={['lg', null, 'xl']} mt={8} color="highlight">
              <Typing text="Hello :)" id="intro" />
            </Text>
            <Box mt={4} mb={8}>
              I'm{' '}
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Text as="span" textDecor="underline" cursor="default">
                    Gifa
                  </Text>
                </PopoverTrigger>
                <PopoverContent
                  width="auto"
                  maxW="initial"
                  bgColor="background"
                  borderColor="primary"
                >
                  <PopoverBody>
                    <img src="/static/gifaeriyanto.png" alt="Gifa Eriyanto" />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              , an experienced software engineer from Indonesia who focuses on
              Frontend Web Development.
            </Box>
            <Button variant="function">explore</Button>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
