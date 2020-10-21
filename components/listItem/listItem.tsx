import { useTheme, Box, Heading, Link as CLink, Text } from '@chakra-ui/core';
import gsap from 'gsap';
import React, { useEffect } from 'react';

export interface IListItem {
  title: string;
  link: string;
}

export const ListItem: React.FC<IListItem> = ({
  title,
  link,
  children,
  ...props
}) => {
  const theme = useTheme();

  useEffect(() => {
    gsap.fromTo(
      '.list__item',
      {
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
      borderColor={theme.colors.primary + '99'}
      _last={{
        borderBottom: '1px solid',
        borderColor: theme.colors.primary + '99',
      }}
      py={8}
      w="100%"
      opacity={0}
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
