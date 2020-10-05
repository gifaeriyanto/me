import { Box, Button, Flex, HStack } from '@chakra-ui/core';
import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from 'react-icons/ai';

export const Footer: React.FC = () => {
  return (
    <Flex p="25px 30px" justify="space-between" align="center">
      <HStack>
        <Button
          leftIcon={<AiFillGithub />}
          variant="ghost"
          as="a"
          href="https://github.com/gifaeriyanto"
          target="_blank"
        >
          Github
        </Button>
        <Button
          leftIcon={<AiFillLinkedin />}
          variant="ghost"
          as="a"
          href="https://www.linkedin.com/in/gifa-eriyanto-8b740a100/"
          target="_blank"
        >
          Linkedin
        </Button>
        <Button
          leftIcon={<AiFillMediumSquare />}
          variant="ghost"
          as="a"
          href="https://medium.com/@gifa.eriyanto"
          target="_blank"
        >
          Medium
        </Button>
      </HStack>
      <Box>(ctrl+c)right 2020</Box>
    </Flex>
  );
};
