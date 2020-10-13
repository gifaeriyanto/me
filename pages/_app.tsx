import { localStorageManager, ChakraProvider } from '@chakra-ui/core';
import { Layout } from '@components/layout';
import { theme, DarkThemeContext } from '@utils/theme';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorageManager.get() === 'dark');
  }, []);

  return (
    <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ChakraProvider
        theme={theme(darkMode)}
        colorModeManager={localStorageManager}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </DarkThemeContext.Provider>
  );
};

export default App;
