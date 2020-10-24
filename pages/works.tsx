import { useWorks } from '@api/useWorks';
import { Box, Container, Grid, Heading, VStack } from '@chakra-ui/core';
import { ListItem } from '@components/listItem';
import { Typing } from '@components/typing';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useMemo } from 'react';

const Index: NextPage = () => {
  const { data, isFetching } = useWorks();

  const works = useMemo(() => {
    const extraProps = {
      borderWidth: { lg: '1px' },
      p: { lg: '20px' },
      h: { lg: '200px' },
    };

    const result = {
      awards: [],
      common: [],
      featured: [],
    };

    data?.map((work) => {
      if (work.data.award) {
        result.awards.push(
          <ListItem
            title={work.data.title}
            link={work.data.link}
            key={work.id}
            {...extraProps}
          >
            {work.data.description}
          </ListItem>,
        );
      } else if (work.data.featured) {
        result.featured.push(
          <ListItem
            title={work.data.title}
            link={work.data.link}
            key={work.id}
            {...extraProps}
          >
            {work.data.description}
          </ListItem>,
        );
      } else {
        result.common.push(
          <ListItem title={work.data.title} link={work.data.link} key={work.id}>
            {work.data.description}
          </ListItem>,
        );
      }
    });

    return result;
  }, [data]);

  return (
    <>
      <NextSeo title="Works - Gifa Eriyanto" description="My featured works" />

      <Container py={10} maxW="lg">
        <Heading as="h1" mb={10} color="highlight" gridColumn={[1, null, 2]}>
          <Typing text="Featured Works" id="works-title-page" />
        </Heading>
        {isFetching ? (
          <Box>Loading...</Box>
        ) : (
          <>
            <Grid templateColumns={[null, null, 'repeat(3, 1fr)']} gap={6}>
              {works.featured}
            </Grid>

            <Heading
              as="h3"
              mb={4}
              fontSize={30}
              fontWeight="normal"
              color="highlight"
              gridColumn={[1, null, 2]}
              mt={10}
            >
              Awards
            </Heading>
            <Grid templateColumns={[null, null, 'repeat(3, 1fr)']} gap={6}>
              {isFetching ? <Box>Loading...</Box> : works.awards}
            </Grid>

            <Heading
              as="h3"
              mb={4}
              fontSize={30}
              fontWeight="normal"
              color="highlight"
              gridColumn={[1, null, 2]}
              mt={10}
            >
              More...
            </Heading>
            <VStack spacing={0} align="flex-start">
              {works.common}
            </VStack>
          </>
        )}
      </Container>
    </>
  );
};

export default Index;
