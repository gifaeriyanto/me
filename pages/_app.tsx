import { localStorageManager, ChakraProvider } from '@chakra-ui/core';
import { theme, DarkThemeContext } from '@utils/theme';
import { register, unregister } from 'next-offline/runtime';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorageManager.get() === 'dark');
    if (process.env.NODE_ENV === 'production') {
      register();
      return () => {
        unregister();
      };
    }
  }, []);

  return (
    <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ChakraProvider
        theme={theme(darkMode)}
        colorModeManager={localStorageManager}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </DarkThemeContext.Provider>
  );
};

export default App;
