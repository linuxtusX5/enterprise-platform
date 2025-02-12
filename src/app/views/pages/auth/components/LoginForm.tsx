import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Alert } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  CardHeader,
  Divider,
  Card,
} from '@material-ui/core';
import { saveClaimsAction, saveTokenAction } from 'features/auth/authSlice';
import { ClaimsType } from 'app/models/claims-type';

import { loginAxios } from 'app/services/authService';

const LoginForm = () => {
  const key = 'token';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const saveUserAuthDetails = (data: { accessToken: string }) => {
    localStorage.setItem(key, data.accessToken);
    const claims: ClaimsType = jwtDecode(data.accessToken);
    console.log('Claims::', claims); /*just to check it */
    dispatch(saveTokenAction(data.accessToken));
    dispatch(saveClaimsAction(claims));
  };

  return (
    <Formik
      initialValues={{
        email: 'demo@acme.io',
        password: 'Pass123!',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        password: Yup.string().max(255).required('Password is required'),
      })}
      onSubmit={async (values, formikHelpers) => {
        try {
          const { data } = await loginAxios(values);
          saveUserAuthDetails(data);
          formikHelpers.resetForm();
          formikHelpers.setStatus({ success: true });
          formikHelpers.setSubmitting(false);
          //   history.push('dashboard');
          navigate('/dashboard', { replace: true });
        } catch (e) {
          setError('Failed. Please try again.');
          console.log((e as any).message);
          formikHelpers.setStatus({ success: false });
          formikHelpers.setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Card>
          <form noValidate onSubmit={handleSubmit}>
            <CardHeader title="Login" />
            <Divider />
            <Box m={2}>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                autoFocus
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />

              <Box mt={2}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Log In
                </Button>
              </Box>
              {error && (
                <Box mt={3}>
                  <FormHelperText error>{error}</FormHelperText>
                </Box>
              )}
              <Box mt={2}>
                <Alert severity="info">
                  <div>
                    Use <b>demo@acme.io</b> and password <b>Pass123!</b>
                  </div>
                </Alert>
              </Box>
            </Box>
          </form>
        </Card>
      )}
    </Formik>
  );
};

export default LoginForm;
