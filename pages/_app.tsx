import { localStorageManager, ChakraProvider } from '@chakra-ui/react';
import { Layout } from '@components/layout';
import { gaInit, gaLogEvent, gaLogPageView } from '@utils/googleAnalytics';
import { theme, DarkThemeContext } from '@utils/theme';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setDarkMode(localStorageManager.get() === 'dark');
    gaInit();
  }, []);

  useEffect(() => {
    gaLogPageView();
  }, [pathname]);

  useEffect(() => {
    gaLogEvent(darkMode ? 'Dark' : 'Light', 'Theme');
  }, [darkMode]);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <ChakraProvider
          theme={theme(darkMode)}
          colorModeManager={localStorageManager}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </ChakraProvider>
      </DarkThemeContext.Provider>
    </ReactQueryCacheProvider>
  );
};

export default App;
