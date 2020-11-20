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
} from '@chakra-ui/core';
import { Typing } from '@components/typing';
import { gaLogEvent } from '@utils/googleAnalytics';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import { AiOutlineHome, AiOutlineLaptop } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { CgGames } from 'react-icons/cg';
import { GiFriedFish } from 'react-icons/gi';
import { MdChildCare } from 'react-icons/md';
import { RiBrushLine } from 'react-icons/ri';

const Index: NextPage = () => {
  const { data, isFetching } = useCareer();

  const list = [
    {
      icon: AiOutlineLaptop,
      desc: 'works full-time as a software engineer',
    },
    { icon: AiOutlineHome, desc: 'work from home' },
    {
      icon: RiBrushLine,
      desc: (
        <>
          UI designer {'-> '}
          <CLink
            href="https://www.behance.net/gifaeriyanto"
            isExternal
            color="highlight"
            onClick={() => {
              gaLogEvent('See my behance', 'Curious about me');
            }}
          >
            behance
          </CLink>
        </>
      ),
    },
    {
      icon: BiPencil,
      desc: (
        <>
          writer {'-> '}
          <CLink
            href="https://medium.com/@gifa.eriyanto"
            isExternal
            color="highlight"
            onClick={() => {
              gaLogEvent('See my medium', 'Curious about me');
            }}
          >
            medium
          </CLink>
        </>
      ),
    },
    { icon: MdChildCare, desc: 'have 2 children' },
    {
      icon: CgGames,
      desc: (
        <>
          dota 2 player {'-> '}
          <CLink
            href="https://www.dotabuff.com/players/156239585"
            isExternal
            color="highlight"
            onClick={() => {
              gaLogEvent('See my dotabuff', 'Curious about me');
            }}
          >
            dotabuff
          </CLink>
        </>
      ),
    },
    { icon: GiFriedFish, desc: 'breeding Betta Fish' },
  ];

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
        title="About Me - Gifa Eriyanto"
        description="This is me, I like front-end website development and this is my story."
      />

      <Container py={10} maxW="lg">
        <Heading as="h1" mb={10} color="highlight">
          <Typing text="About Me" id="about-title-page" />
        </Heading>

        <Box fontSize={24} mb={4}>
          Hello my name is Gifa Eriyanto and I'm a Software Engineer that focus
          in front-end side.
        </Box>

        <Box>
          Actually I learned the frontend was forced, you can see the reason{' '}
          <CLink
            href="https://medium.com/@gifa.eriyanto/4-years-experience-as-a-engineer-frontend-454b438b9c95"
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

        <Heading
          as="h2"
          mb={4}
          fontSize={20}
          color="highlight"
          gridColumn={[1, null, 2]}
          mt={10}
        >
          gifaeriyanto:
        </Heading>
        <VStack spacing={3} ml={[null, null, 10]}>
          {list.map((item, index) => (
            <Flex key={index} w="100%">
              <Box borderRadius="6px" color="highlight">
                <Icon
                  as={item.icon}
                  color="highlight"
                  fontSize={20}
                  mr={4}
                  path="list-icon"
                />
              </Box>
              <Box>{item.desc}</Box>
            </Flex>
          ))}
        </VStack>

        <Heading
          as="h2"
          mb={4}
          fontSize={20}
          color="highlight"
          gridColumn={[1, null, 2]}
          mt={10}
        >
          Career:
        </Heading>
        {isFetching ? (
          <Box>Loading...</Box>
        ) : (
          <VStack spacing={3} ml={[null, null, 10]}>
            {career}
          </VStack>
        )}
      </Container>
    </>
  );
};

export default Index;
