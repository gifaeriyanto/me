import { usePosts } from '@api/usePosts';
import { Box, Container, Grid, Heading, Stack, VStack } from '@chakra-ui/react';
import { ListItem } from '@components/listItem';
import { OfflineAlert } from '@components/offlineAlert';
import { Typing } from '@components/typing';
import { gaLogEvent } from '@utils/googleAnalytics';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useMemo, useState } from 'react';

const Index: NextPage = () => {
  const [lang, setLang] = useState('en');
  const { data, isFetching } = usePosts({ lang });

  const blogPosts = useMemo(
    () =>
      data?.map((post) => (
        <ListItem
          title={post.data.title}
          link={post.data.link}
          key={post.id}
          onClick={() => {
            gaLogEvent(post.data.title, 'Blog details');
          }}
        >
          {format(post.data.created_at.seconds * 1000, 'MMM do, yyyy')}
        </ListItem>
      )),
    [data],
  );

  return (
    <>
      <NextSeo
        title="Blog - Gifa Eriyanto | Frontend Web Engineer"
        description="I love to share knowledge and experience about tech.
          I really enjoyed it and hope what I shared will motivate many people
          to help them (and me also) growth and making impact."
      />

      <Container py={10} maxW="container.lg">
        <Grid templateColumns={['5fr', null, '1fr 4fr']}>
          <Heading as="h1" mb={10} color="highlight" gridColumn={[1, null, 2]}>
            <Typing text="Blog" id="blog-title-page" />
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
              onClick={() => setLang('en')}
              _before={{ content: lang === 'en' && '"|>"', marginRight: 2 }}
            >
              English
            </Box>
            <Box
              cursor="pointer"
              onClick={() => setLang('id')}
              _before={{ content: lang === 'id' && '"|>"', marginRight: 2 }}
            >
              Indonesia
            </Box>
          </Stack>
          <Box>
            <VStack spacing={0} align="flex-start">
              <OfflineAlert />
              {isFetching ? <Box>Loading...</Box> : blogPosts}
            </VStack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
