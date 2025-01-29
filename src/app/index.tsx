/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes';
import { GlobalStyle } from 'styles/global-styles';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavigationBar from './components/navigationbar';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavigationBar />
      <Container>
        <RoutesComponent />
      </Container>
      <GlobalStyle />
    </BrowserRouter>
  );
}
