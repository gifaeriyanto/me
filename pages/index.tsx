import {
  useColorMode,
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
import { darkTheme } from '@utils/theme';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Index: NextPage = () => {
  const { colorMode } = useColorMode();

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
          <Text
            fontSize={['lg', null, 'xl']}
            mt={8}
            color={colorMode === 'light' ? 'highlight' : darkTheme.highlight}
          >
            <Typing text="Hello :)" id="intro" />
          </Text>
          <Box mt={4} mb={8}>
            I'm{' '}
            <Text
              as="span"
              cursor="pointer"
              color={colorMode === 'light' ? 'highlight' : darkTheme.highlight}
            >
              Gifa
            </Text>
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
