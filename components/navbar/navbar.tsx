import {
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Typing } from '@components/typing';
import { routes } from '@utils/routes';
import { darkTheme } from '@utils/theme';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const menusData = [
  {
    text: 'Home',
    link: routes.home,
  },
  {
    text: 'About',
    link: routes.about,
  },
  {
    text: 'Works',
    link: routes.works,
  },
  {
    text: 'Talks',
    link: routes.talks,
  },
  {
    text: 'Blog',
    link: routes.blog,
  },
];

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navToggleRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    toggleColorMode();
  };

  const menus = menusData.map((menu, index) => {
    const { colorMode } = useColorMode();

    return (
      <Box
        key={index}
        borderBottom="2px solid"
        borderColor="transparent"
        _hover={{
          color: colorMode === 'light' ? 'highlight' : darkTheme.highlight,
          borderColor:
            colorMode === 'light' ? 'highlight' : darkTheme.highlight,
        }}
      >
        <Link href={menu.link}>
          <a onClick={onClose}>{menu.text}</a>
        </Link>
      </Box>
    );
  });

  return (
    <>
      <Box
        as="header"
        pos="fixed"
        top={0}
        left={0}
        w="100%"
        bgColor={colorMode === 'light' ? 'background' : darkTheme.background}
        p="25px 40px"
        zIndex={2}
      >
        <Flex justify="space-between" align="center">
          <Link href={routes.home}>
            <a>
              <Text className="logo" fontSize="20px" fontWeight="bold">
                <Typing text={isMobile ? 'gifa' : 'gifaeriyanto'} id="logo" />
              </Text>
            </a>
          </Link>
          <Flex alignItems="center">
            <Icon
              as={colorMode === 'light' ? FaMoon : FaSun}
              boxSize={4}
              mr={8}
              onClick={handleToggle}
              cursor="pointer"
              color={colorMode === 'light' ? 'primary' : darkTheme.highlight}
            />
            <Box
              d="inline-block"
              fontSize="26px"
              cursor="pointer"
              onClick={onOpen}
              ref={navToggleRef}
            >
              {isOpen ? '!==' : '==='}
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={navToggleRef}
        size="lg"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader textAlign="right" fontSize="26px" py={6}>
              <Button fontSize="26px" onClick={onClose}>
                !==
              </Button>
            </DrawerHeader>
            <DrawerBody>
              <VStack
                spacing={2}
                justify="center"
                align="flex-start"
                p={10}
                fontSize="lg"
              >
                {menus}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
