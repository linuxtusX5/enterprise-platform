import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import ProductCreateForm from './ProductCreateForm';
import Header from './Header';

const ProductCreateView = () => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <ProductCreateForm />
    </Container>
  );
};
const index = () => {
  return (
    <div>
      <h1>ProductCreateView</h1>
    </div>
  );
};

export default index;

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
    marginLeft: '240px',
  },
}));
