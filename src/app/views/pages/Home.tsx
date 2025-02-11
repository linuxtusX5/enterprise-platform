import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@material-ui/core';
import Pages from 'app/components/pages';

const Home = () => {
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Pages title="Home">
      <Container>
        <Box
          height={mobileDevice ? '50vh' : '100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography variant={mobileDevice ? 'h4' : 'h1'}>
            Welcome to Online Shop 🛍️
          </Typography>
        </Box>
      </Container>
    </Pages>
  );
};

export default Home;
