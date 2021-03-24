import { Alert, Box, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiWifiOffLine } from 'react-icons/ri';

export const OfflineAlert: React.FC = () => {
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
        <Box mb={4}>
          <Icon as={RiWifiOffLine} mr={4} path /> You're currently offline
        </Box>
      )}
    </>
  );
};
