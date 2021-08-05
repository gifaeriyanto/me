import { characteristics } from '@api/staticData/characteristics';
import { knowledgeBase } from '@api/staticData/knowledgeBase';
import { useCareer } from '@api/useCareer';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link as CLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Typing } from '@components/typing';
import { gaLogEvent } from '@utils/googleAnalytics';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Index: NextPage = () => {
  const { data, isFetching } = useCareer();

  const headingProps = {
    mb: 4,
    fontSize: 20,
    color: 'highlight',
    gridColumn: [1, null, 2],
    mt: 10,
  };

  const career = data?.map((item) => (
    <Flex key={item.id} w="100%">
      <Box borderRadius="6px" mr={4} color="highlight">
        {'|>'}
      </Box>
      <Box>
        <Text fontWeight="bold">{item.data.title}</Text>
        <Text fontSize="sm">
          <CLink href={item.data.company_website} isExternal color="highlight">
            {item.data.company}
          </CLink>{' '}
          . {item.data.type}
        </Text>
        <Text fontSize="sm">
          {format(item.data.start_date.seconds * 1000, 'MMM yyyy')} -{' '}
          {item.data.end_date
            ? format(item.data.end_date.seconds * 1000, 'MMM yyyy')
            : 'Present'}
        </Text>
        <Text fontSize="sm">{item.data.location}</Text>
      </Box>
    </Flex>
  ));

  return (
    <>
      <NextSeo
        title="About Me - Gifa Eriyanto | Frontend Web Engineer"
        description="This is me, I like front-end website development and this is my story."
      />

      <Container py={10} maxW="container.lg">
        <Heading as="h1" mb={10} color="highlight">
          <Typing text="About Me" id="about-title-page" />
        </Heading>

        <Box fontSize={24} mb={4}>
          Hello, my name is Gifa Eriyanto and I'm a Software Engineer that
          focuses on the front-end side.
        </Box>

        <Box>
          Actually I learned the frontend was forced, you can see the reason{' '}
          <CLink
            href="https://gifaeriyanto.medium.com//4-years-experience-as-a-engineer-frontend-454b438b9c95"
            isExternal
            color="highlight"
            onClick={() => {
              gaLogEvent('Reason why I learned FE', 'Curious about me');
            }}
          >
            here
          </CLink>
          . But, after I went deeper into the world of software engineering, I
          love this job even more.
        </Box>

        <Heading as="h2" {...headingProps}>
          gifaeriyanto:
        </Heading>
        <VStack spacing={3} ml={[null, null, 10]}>
          {characteristics.map((item, index) => (
            <Flex key={index} w="100%">
              <Box borderRadius="6px" color="highlight">
                <Icon as={item.icon} color="highlight" fontSize={20} mr={4} />
              </Box>
              <Box>{item.desc}</Box>
            </Flex>
          ))}
        </VStack>

        <Heading as="h2" {...headingProps}>
          Career:
        </Heading>
        {isFetching ? (
          <Box>Loading...</Box>
        ) : (
          <VStack spacing={3} ml={[null, null, 10]}>
            {career}
          </VStack>
        )}

        <Heading as="h2" {...headingProps}>
          Knowledge Base:
        </Heading>
        <Text>Below are some of my favorite stacks that I have used.</Text>
        {Object.keys(knowledgeBase).map((key) => (
          <Box maxW="800px" key={key}>
            <Heading as="h3" {...headingProps} fontSize={18} mt={4} mb={2}>
              {key}:
            </Heading>
            {knowledgeBase[key].map((item: string) => (
              <Text
                fontSize="14px"
                as="span"
                _after={{
                  content: '" && "',
                  opacity: 0.5,
                }}
                _last={{
                  _after: { d: 'none' },
                }}
                key={item}
              >
                {item}
              </Text>
            ))}
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Index;
