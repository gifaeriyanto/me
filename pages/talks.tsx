import {
  useTheme,
  Box,
  Container,
  Grid,
  Heading,
  Link as CLink,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/core';
import { Typing } from '@components/typing';
import db from '@utils/firebase';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [year, setYear] = useState(2020);
  const theme = useTheme();

  const fetchTalks = () => {
    setIsFetching(true);
    db.collection('talks')
      .orderBy('date', 'desc')
      .where('date', '>', new Date(`${year.toString()}-01-01`))
      .where('date', '<', new Date(`${year.toString()}-12-31`))
      .onSnapshot((snapshot) => {
        setIsFetching(false);
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        );
      });
  };

  useEffect(() => {
    fetchTalks();
  }, [year]);

  const blogPosts = posts.map((post, index) => (
    <Box
      key={index}
      borderTop="1px solid"
      borderColor={theme.colors.primary + '99'}
      _last={{
        borderBottom: '1px solid',
        borderColor: theme.colors.primary + '99',
      }}
      py={8}
      w="100%"
    >
      <CLink href={post.data.link} isExternal>
        <Heading fontSize={['1.2rem']} fontWeight="normal">
          {post.data.title}
        </Heading>
      </CLink>
      <Text fontSize="sm" opacity={0.8} fontStyle="italic">
        {format(post.data.date.seconds * 1000, 'MMM do, yyyy')}
      </Text>
    </Box>
  ));

  return (
    <>
      <NextSeo
        title="Talks - Gifa Eriyanto"
        description="I'm an experienced software engineer from Indonesia who focuses on
      Frontend Web Development."
      />

      <Container py={10} maxW="lg">
        <Grid templateColumns={['5fr', null, '1fr 4fr']}>
          <Heading as="h1" mb={10} color="highlight" gridColumn={[1, null, 2]}>
            <Typing text="Talks" id="talks-title-page" />
          </Heading>
        </Grid>
        <Grid templateColumns={['5fr', null, '1fr 4fr']}>
          <Stack
            direction={['row', null, 'column']}
            spacing={4}
            align="flex-start"
            mb={8}
          >
            <Box
              cursor="pointer"
              onClick={() => setYear(2020)}
              _before={{ content: year === 2020 && '"|>"', marginRight: 2 }}
            >
              2020
            </Box>
            <Box
              cursor="pointer"
              onClick={() => setYear(2019)}
              _before={{ content: year === 2019 && '"|>"', marginRight: 2 }}
            >
              2019
            </Box>
          </Stack>
          <Box>
            <VStack spacing={0} align="flex-start">
              {isFetching ? <Box>Loading...</Box> : blogPosts}
            </VStack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
