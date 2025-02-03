import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import ProductCreateForm from './ProductCreateForm';
import Header from './Header';
import Pages from 'app/components/pages';

const ProductCreateView = () => {
  const classes = useStyles();
  return (
    <Pages className={classes.root} title="Create Product">
      <Container maxWidth="lg">
        <Header />
        <ProductCreateForm />
      </Container>
    </Pages>
  );
};

export default ProductCreateView;

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    // marginLeft: '240px',
  },
}));
