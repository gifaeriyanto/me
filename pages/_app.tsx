import {
  localStorageManager,
  useColorMode,
  ChakraProvider,
} from '@chakra-ui/react';
import { Layout } from '@components/layout';
import { gaInit, gaLogEvent, gaLogPageView } from '@utils/googleAnalytics';
import { theme } from '@utils/theme';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

const App = ({ Component, pageProps }: AppProps) => {
  const { colorMode } = useColorMode();
  const { pathname } = useRouter();

  useEffect(() => {
    gaInit();
  }, []);

  useEffect(() => {
    gaLogPageView();
  }, [pathname]);

  useEffect(() => {
    gaLogEvent(colorMode, 'Theme');
  }, [colorMode]);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </ChakraProvider>
    </ReactQueryCacheProvider>
  );
};

export default App;
