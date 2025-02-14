import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@material-ui/core';
import Pages from 'app/components/pages';

const NotFoundPage = () => {
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Pages title="Not Found Page">
      <Container>
        <Box
          height={mobileDevice ? '50vh' : '100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography variant={mobileDevice ? 'h4' : 'h2'}>
            404 Page Not Found ☹
          </Typography>
        </Box>
      </Container>
    </Pages>
  );
};

export default NotFoundPage;
