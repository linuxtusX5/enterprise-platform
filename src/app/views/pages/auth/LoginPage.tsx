import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Container, Divider } from '@material-ui/core';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Pages from 'app/components/pages';

const LoginPage = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Pages className={classes.root} title="Authentication">
      <Container>
        <Box
          my={5}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <Divider />
          <Box mt={5}>
            Go to{' '}
            {isLogin ? (
              <Button
                size={'small'}
                color={'primary'}
                variant={'text'}
                onClick={() => setIsLogin(false)}
              >
                Register Form
              </Button>
            ) : (
              <Button
                size={'small'}
                color={'primary'}
                variant={'text'}
                onClick={() => setIsLogin(true)}
              >
                Login Form
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Pages>
  );
};

const useStyles = makeStyles(() => ({
  root: {},
}));

export default LoginPage;
