import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { Outlet, NavLink } from 'react-router-dom';
import { getProfileAction } from 'features/profile/profileAsyncActions';
import {
  Divider,
  Drawer,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import clsx from 'clsx';
import {
  PieChart as PieChartIcon,
  ShoppingCart as ShoppingCartIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  Calendar as CalendarIcon,
  List as ListIcon,
  FilePlus as FilePlusIcon,
  User as UserIcon,
  DollarSign as DollarSignIcon,
  LogOut as LogOutIcon,
} from 'react-feather';
const drawerWidth = 240;

const DashboardSidebarnavigation = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { profile } = useSelector((state: RootState) => state.profile);
  const { claims } = useSelector((state: RootState) => state.auth);
  const mobileDevice = useMediaQuery('(max-width:650px)');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    // dispatch(getProfileAction(claims.sub));
    if (claims?.sub) {
      dispatch(getProfileAction(claims.sub));
    }
  }, [claims?.sub, dispatch]);

  return (
    <div className={classes.root}>
      <Outlet />
      <Drawer
        className={clsx(classes.drawer, mobileDevice && classes.drawerClose)}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, mobileDevice && classes.drawerClose),
        }}
        anchor="left"
      >
        {profile.name && !mobileDevice && (
          <Box p={2}>
            <Box display="flex" justifyContent="center">
              <Avatar
                alt="User"
                className={classes.avatar}
                src={profile.avatar}
                variant="circular"
              />
            </Box>
            <Box mt={2} textAlign="center">
              <Typography>{profile.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Your tier: {profile.tier}
              </Typography>
            </Box>
          </Box>
        )}
        <Divider />
        {mobileDevice ? (
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button component={NavLink} to="/dashboard">
                <ListItemIcon>
                  <PieChartIcon />
                </ListItemIcon>
              </ListItem>
              <Divider />
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </ListItem>
              <Divider />
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
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
                  </ListItem>
                </List>
              </Collapse>
              <Divider />
              <ListItem button component={NavLink} to="calendar">
                <ListItemIcon>
                  <CalendarIcon />
                </ListItemIcon>
              </ListItem>
              <Divider />
              <ListItem button component={NavLink} to="account">
                <ListItemIcon>
                  <UserIcon />
                </ListItemIcon>
              </ListItem>
              <Divider />
              <ListItem button component={NavLink} to="pricing">
                <ListItemIcon>
                  <DollarSignIcon />
                </ListItemIcon>
              </ListItem>
              <Divider />
              <a className={classes.link} href={'/'}>
                <ListItem button onClick={handleLogout}>
                  <ListItemIcon>
                    <LogOutIcon />
                  </ListItemIcon>
                </ListItem>
              </a>
            </List>
            <Divider />
          </div>
        ) : (
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

              <ListSubheader>Applications</ListSubheader>
              <ListItem button component={NavLink} to="calendar">
                <ListItemIcon>
                  <CalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>

              <ListSubheader>Pages</ListSubheader>
              <ListItem button component={NavLink} to="account">
                <ListItemIcon>
                  <UserIcon />
                </ListItemIcon>
                <ListItemText primary={'Account'} />
              </ListItem>
              <ListItem button component={NavLink} to="pricing">
                <ListItemIcon>
                  <DollarSignIcon />
                </ListItemIcon>
                <ListItemText primary={'Pricing'} />
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <LogOutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default DashboardSidebarnavigation;
const useStyles = makeStyles(theme =>
  createStyles({
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64,
    },
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
    // mobile style
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
  }),
);
