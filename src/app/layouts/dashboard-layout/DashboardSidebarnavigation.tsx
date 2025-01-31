import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Link, Outlet, NavLink } from 'react-router-dom';
import {
  Divider,
  Drawer,
  Collapse,
  List,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  PieChart as PieChartIcon,
  ShoppingCart as ShoppingCartIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  List as ListIcon,
  FilePlus as FilePlusIcon,
  LogOut as LogOutIcon,
} from 'react-feather';
const drawerWidth = 240;

const DashboardSidebarnavigation = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <Outlet />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar
          style={{ width: '6rem', height: 'auto' }}
          className={classes.toolbar}
        >
          <Link to={'/'} className={classes.logoWithLink}>
            Logo
          </Link>
          <Divider />
        </Toolbar>
        <div className={classes.drawerContainer}>
          <List>
            <ListSubheader>Reports</ListSubheader>
            <ListItem button component={NavLink} to="/dashboard">
              <ListItemIcon>
                <PieChartIcon />
              </ListItemIcon>
              <ListItemText primary="dashboard" />
            </ListItem>

            <ListSubheader>Management</ListSubheader>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
              {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  component={NavLink}
                  to="/dashboard/list-products"
                >
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="List Products" />
                </ListItem>

                <ListItem
                  button
                  className={classes.nested}
                  component={NavLink}
                  to="/dashboard/create-product"
                >
                  <ListItemIcon>
                    <FilePlusIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Product" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button component={NavLink} to="/">
              <ListItemIcon>
                <LogOutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardSidebarnavigation;
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: { textDecoration: 'none', color: 'inherit' },
    logoWithLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);
