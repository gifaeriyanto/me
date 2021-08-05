import { useWorks } from '@api/useWorks';
import {
  useColorMode,
  Box,
  Container,
  Grid,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ListItem } from '@components/listItem';
import { Typing } from '@components/typing';
import { gaLogEvent } from '@utils/googleAnalytics';
import { darkTheme } from '@utils/theme';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useMemo } from 'react';

const Index: NextPage = () => {
  const { data, isFetching } = useWorks();
  const { colorMode } = useColorMode();

  const works = useMemo(() => {
    const extraProps = {
      borderWidth: { md: '1px' },
      p: { md: '20px' },
      h: { md: '200px' },
    };

    const result = {
      awards: [],
      common: [],
      featured: [],
      oss: [],
    };

    data?.forEach((work) => {
      if (work.data.award) {
        result.awards.push(
          <ListItem
            title={work.data.title}
            link={work.data.link}
            key={work.id}
            onClick={() => {
              gaLogEvent(work.data.title, 'Award details');
            }}
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
            onClick={() => {
              gaLogEvent(work.data.title, 'Work details');
            }}
            {...extraProps}
          >
            {work.data.description}
          </ListItem>,
        );
      } else if (work.data.oss) {
        result.oss.push(
          <ListItem
            title={work.data.title}
            link={work.data.link}
            key={work.id}
            onClick={() => {
              gaLogEvent(work.data.title, 'Work details');
            }}
            {...extraProps}
          >
            {work.data.description}
          </ListItem>,
        );
      } else {
        result.common.push(
          <ListItem
            title={work.data.title}
            link={work.data.link}
            key={work.id}
            onClick={() => {
              gaLogEvent(work.data.title, 'Work details');
            }}
          >
            {work.data.description}
          </ListItem>,
        );
      }
    });

    return result;
  }, [data]);

  return (
    <>
      <NextSeo
        title="Works - Gifa Eriyanto | Frontend Web Engineer"
        description="My featured works"
      />

      <Container py={10} maxW="container.lg">
        <Heading
          as="h1"
          mb={10}
          color={colorMode === 'light' ? 'highlight' : darkTheme.highlight}
          gridColumn={[1, null, 2]}
        >
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
              color={colorMode === 'light' ? 'highlight' : darkTheme.highlight}
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
              color={colorMode === 'light' ? 'highlight' : darkTheme.highlight}
              gridColumn={[1, null, 2]}
              mt={10}
            >
              Open source contributing
            </Heading>
            <Grid templateColumns={[null, null, 'repeat(3, 1fr)']} gap={6}>
              {isFetching ? <Box>Loading...</Box> : works.oss}
            </Grid>

            <Heading
              as="h3"
              mb={4}
              fontSize={30}
              fontWeight="normal"
              color={colorMode === 'light' ? 'highlight' : darkTheme.highlight}
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
