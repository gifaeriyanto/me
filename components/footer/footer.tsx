import {
  useBreakpointValue,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react';
import { gaLogEvent } from '@utils/googleAnalytics';
import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { IoIosMore } from 'react-icons/io';

const socials = [
  {
    key: 1,
    icon: <AiFillGithub />,
    link: 'https://github.com/gifaeriyanto',
    text: 'Github',
  },
  {
    key: 2,
    icon: <AiFillLinkedin />,
    link: 'https://www.linkedin.com/in/gifa-eriyanto-8b740a100/',
    text: 'Linkedin',
  },
  {
    key: 3,
    icon: <AiFillMediumSquare />,
    link: 'https://medium.com/@gifa.eriyanto',
    text: 'Medium',
  },
];

export const Footer: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex p="25px 30px" justify="space-between" align="center" as="footer">
      {isMobile ? (
        <Popover placement="top-end" autoFocus={false} closeOnBlur>
          <PopoverTrigger>
            <IconButton
              icon={<IoIosMore />}
              aria-label="Socials"
              fontSize="22px"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <VStack>
                {socials.map((social) => (
                  <Button
                    leftIcon={social.icon}
                    variant="ghost"
                    as="a"
                    href={social.link}
                    target="_blank"
                    w="100%"
                    justifyContent="flex-start"
                    key={social.key}
                    rel="noopener noreferrer"
                    aria-label={social.text}
                  >
                    {social.text}
                  </Button>
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <HStack>
          {socials.map((social) => (
            <Button
              leftIcon={social.icon}
              variant="ghost"
              as="a"
              href={social.link}
              target="_blank"
              key={social.key}
              rel="noopener noreferrer"
              aria-label={social.text}
              onClick={() => {
                gaLogEvent(social.text, 'Click my social media');
              }}
            >
              {social.text}
            </Button>
          ))}
        </HStack>
      )}
      <Box>(ctrl+c)right {new Date().getFullYear()}</Box>
    </Flex>
  );
};
