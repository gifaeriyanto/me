import {
  Box,
  Button,
  Container,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { Typing } from '@components/typing';
import { routes } from '@utils/routes';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Gifa Eriyanto | Frontend Web Engineer"
        description="I'm an experienced software engineer from Indonesia who focuses on
          Frontend Web Development."
      />

      <Container
        maxW="container.md"
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
            <Popover autoFocus={false} placement="auto-start">
              <PopoverTrigger>
                <Text as="span" textDecor="underline" cursor="pointer">
                  Gifa
                </Text>
              </PopoverTrigger>
              <PopoverContent width="152px">
                <PopoverBody p={0} lineHeight={0} width="152px">
                  <Image
                    src="/static/gifaeriyanto.png"
                    alt="Gifa Eriyanto | Frontend Web Engineer"
                    width="150px"
                    height="150px"
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
            , an experienced software engineer from Indonesia who focuses on
            Frontend Web Development.
          </Box>
          <Link href={routes.about}>
            <Button as="a" variant="function" cursor="pointer">
              explore
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Index;
