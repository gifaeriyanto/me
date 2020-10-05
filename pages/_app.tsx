import { ChakraProvider } from '@chakra-ui/core';
import { theme, DarkThemeContext } from '@utils/theme';
import { AppProps } from 'next/app';
import React, { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ChakraProvider theme={theme(darkMode)}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DarkThemeContext.Provider>
  );
};

export default App;
