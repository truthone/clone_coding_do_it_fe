/* eslint-disable react/jsx-no-undef */
import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component>{...pageProps}</Component>
    </ChakraProvider>
  );
};

export default MyApp;
