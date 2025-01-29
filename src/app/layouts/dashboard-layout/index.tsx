import React from 'react';
import { Grid } from '@material-ui/core';
import DashboardSidebarnavigation from './DashboardSidebarnavigation';

type Props = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  return (
    <Grid
      container
      direction="row"
      justify-content="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <DashboardSidebarnavigation />
      {children}
    </Grid>
  );
};

export default Dashboard;
