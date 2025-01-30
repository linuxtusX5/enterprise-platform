import React, { useEffect, useState } from 'react';
import { getSalesAxios } from 'app/services/saleService';
import { SaleType } from 'app/models/sale-type';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Chart from 'react-apexcharts';
import Pages from 'app/components/pages';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@material-ui/core';

const DashboardDefaultContent = () => {
  const classes = useStyle();
  const theme = useTheme();
  const [sales, setSales] = useState<SaleType[]>([]);

  useEffect(() => {
    fetchSales().then();
  }, []);
  const fetchSales = async () => {
    const { data } = await getSalesAxios();
    setSales(data);
  };

  return (
    <Pages className={classes.root} title="Dashboard">
      <Container maxWidth={'sm'}>
        <Typography variant="h4" color="textPrimary">
          Dashboard
        </Typography>
        <Box my={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CardContent>
                <Typography variant="h4" color="textPrimary">
                  Sales
                </Typography>
                <Card className={classes.Card}>
                  <Chart
                    options={getChartStyling(theme)}
                    series={sales}
                    type="bar"
                    height={250}
                  />
                </Card>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Pages>
  );
};

export default DashboardDefaultContent;

const useStyle = makeStyles(() => ({
  root: {
    minHeight: '100%',
    marginLeft: '240px',
  },
  Card: {
    padding: '10px',
    width: '900px',
  },
}));
const getChartStyling = (theme: Theme) => ({
  chart: {
    background: theme.palette.background.paper,
    toolbar: {
      show: false,
    },
  },
  colors: ['#13affe', '#fbab49'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: theme.palette.divider,
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: true,
    labels: {
      colors: theme.palette.text.secondary,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  theme: {
    mode: theme.palette.type,
  },
  tooltip: {
    theme: theme.palette.type,
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
});
