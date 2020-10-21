import { useTalks } from '@api/useTalks';
import {
  Box,
  Container,
  Grid,
  Heading,
  Link as CLink,
  Stack,
  VStack,
} from '@chakra-ui/core';
import { ListItem } from '@components/listItem';
import { OfflineAlert } from '@components/offlineAlert';
import { Typing } from '@components/typing';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useMemo, useState } from 'react';

const Index: NextPage = () => {
  const [year, setYear] = useState(2020);
  const { data, isFetching } = useTalks({
    year,
  });

  const talks = useMemo(
    () =>
      data?.map((talk) => (
        <ListItem title={talk.data.title} link={talk.data.link} key={talk.id}>
          {format(talk.data.date.seconds * 1000, 'MMM do, yyyy')} by{' '}
          <CLink href={talk.data.organizer_website} isExternal>
            {talk.data.organizer}
          </CLink>
        </ListItem>
      )),
    [data],
  );

  return (
    <>
      <NextSeo
        title="Talks - Gifa Eriyanto"
        description="I love to share knowledge and experience about tech.
          I really enjoyed it and hope what I shared will motivate many people
          to help them (and me also) growth and making impact."
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
              _before={{
                content: year === 2020 && '"|>"',
                marginRight: 2,
              }}
            >
              2020
            </Box>
            <Box
              cursor="pointer"
              onClick={() => setYear(2019)}
              _before={{
                content: year === 2019 && '"|>"',
                marginRight: 2,
              }}
            >
              2019
            </Box>
          </Stack>
          <Box>
            <VStack spacing={0} align="flex-start">
              <OfflineAlert />
              {isFetching ? <Box>Loading...</Box> : talks}
            </VStack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
