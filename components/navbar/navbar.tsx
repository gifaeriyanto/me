import {
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/core';
import { Typing } from '@components/typing';
import { routes } from '@utils/routes';
import { DarkThemeContext } from '@utils/theme';
import Link from 'next/link';
import React, { useContext, useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navToggleRef = useRef<HTMLDivElement>(null);
  const { toggleColorMode } = useColorMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
    toggleColorMode();
  };

  return (
    <>
      <Box
        as="header"
        pos="fixed"
        top={0}
        left={0}
        w="100%"
        bgColor="background"
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
              as={darkMode ? FaSun : FaMoon}
              boxSize={4}
              mr={8}
              onClick={handleToggle}
              cursor="pointer"
              color={darkMode ? 'highlight' : 'primary'}
              path="theme-mode"
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
            <DrawerBody>Halo</DrawerBody>

            <DrawerFooter>bye</DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
