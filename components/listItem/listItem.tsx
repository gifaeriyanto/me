import {
  useColorMode,
  useTheme,
  Box,
  ChakraProps,
  Heading,
  Link as CLink,
  Text,
} from '@chakra-ui/react';
import { darkTheme } from '@utils/theme';
import gsap from 'gsap';
import React, { useEffect } from 'react';

export interface IListItem extends ChakraProps {
  title: string;
  link: string;
  onClick?: () => void;
}

export const ListItem: React.FC<IListItem> = ({
  title,
  link,
  onClick,
  children,
  ...props
}) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  useEffect(() => {
    gsap.fromTo(
      '.list__item',
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.1,
        },
      },
    );
  }, []);

  return (
    <Box
      className="list__item"
      borderTop="1px solid"
      borderColor={
        (colorMode === 'light' ? theme.colors.primary : darkTheme.primary) +
        '99'
      }
      _last={{
        borderBottom: '1px solid',
        borderColor:
          (colorMode === 'light' ? theme.colors.primary : darkTheme.primary) +
          '99',
      }}
      py={8}
      w="100%"
      opacity={0}
      onClick={onClick}
      {...props}
    >
      <CLink href={link} isExternal>
        <Heading fontSize={['1.2rem']} fontWeight="normal" mb={2}>
          {title}
        </Heading>
      </CLink>
      <Text fontSize="sm" opacity={0.8} fontStyle="italic">
        {children}
      </Text>
    </Box>
  );
};
