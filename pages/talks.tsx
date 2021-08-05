import { useTalks } from '@api/useTalks';
import {
  Box,
  Container,
  Grid,
  Heading,
  Link as CLink,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ListItem } from '@components/listItem';
import { OfflineAlert } from '@components/offlineAlert';
import { Typing } from '@components/typing';
import { gaLogEvent } from '@utils/googleAnalytics';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useMemo, useState } from 'react';

const Index: NextPage = () => {
  const currentYear = new Date().getFullYear();
  const yearList = new Array(currentYear - 2018)
    .fill(currentYear - 2018)
    .map((_, i) => currentYear - i);
  const [filterByYear, setFilterByYear] = useState(currentYear);
  const { data, isFetching } = useTalks({
    year: filterByYear,
  });

  const talks = useMemo(
    () =>
      data?.map((talk) => (
        <ListItem
          title={talk.data.title}
          link={talk.data.link}
          key={talk.id}
          onClick={() => {
            gaLogEvent(talk.data.title, 'Talk details');
          }}
        >
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
        title="Talks - Gifa Eriyanto | Frontend Web Engineer"
        description="I love to share knowledge and experience about tech.
          I really enjoyed it and hope what I shared will motivate many people
          to help them (and me also) growth and making impact."
      />

      <Container py={10} maxW="container.lg">
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
            {yearList.map((year) => (
              <Box
                cursor="pointer"
                onClick={() => setFilterByYear(year)}
                _before={{
                  content: filterByYear === year && '"|>"',
                  marginRight: 2,
                }}
                key={year}
              >
                {year}
              </Box>
            ))}
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
