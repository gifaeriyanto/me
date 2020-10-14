import { useTalks } from '@api/useTalks';
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
import { ErrorFetch } from '@components/errorFetch';
import { Typing } from '@components/typing';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';

const Index: NextPage = () => {
  const [year, setYear] = useState(2020);
  const theme = useTheme();
  const { data, error, isFetching } = useTalks({
    year,
  });

  const talks = data?.map((talk, index) => (
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
      <CLink href={talk.data.link} isExternal>
        <Heading fontSize={['1.2rem']} fontWeight="normal">
          {talk.data.title}
        </Heading>
      </CLink>
      <Text fontSize="sm" opacity={0.8} fontStyle="italic">
        {format(talk.data.date.seconds * 1000, 'MMM do, yyyy')}
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
              {error && <ErrorFetch message={(error as any)?.name} />}
              {isFetching ? <Box>Loading...</Box> : talks}
            </VStack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
