import { Alert, Icon } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { RiWifiOffLine } from 'react-icons/ri';

export interface IErrorFetch {
  message: string;
}

export const ErrorFetch: React.FC<IErrorFetch> = ({ message }) => {
  const [offline, setOffline] = useState(false);

  const handleOnline = () => {
    setOffline(false);
  };

  const handleOffline = () => {
    setOffline(true);
  };

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      {offline && (
        <Alert status="warning" w="100%" mb={4}>
          <Icon as={RiWifiOffLine} mr={4} path /> You're currently offline
        </Alert>
      )}
      {message && (
        <Alert status="warning" w="100%" mb={4}>
          {message}
        </Alert>
      )}
    </>
  );
};
