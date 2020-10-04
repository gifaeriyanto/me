import { ChakraProvider } from '@chakra-ui/core';
import { theme } from '@utils/theme';
import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
