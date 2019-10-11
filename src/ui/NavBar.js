import React, { useState, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import { MuiThemeProvider } from 'material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  rootSelect: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [drawerOpended , setdrawerOpended] = React.useState(false);
  const [values, setValues] = React.useState({
    categories: 'None',
  });
  const inputLabel = React.useRef(null);
  
  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#56c8d8',
        main: '#0097a7',
        dark: '#006978',
        contrastText: '#000000',
      },
      secondary: {
        light: '#62727b',
        main: '#37474f',
        dark: '#102027',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick  ={() => setdrawerOpended(!drawerOpended)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Unieloo Healt Search
                    </Typography>
                    <div className={classes.search}>            
                        <form className={classes.root} autoComplete="off">
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel htmlFor="filled-age-simple">Especialidades</InputLabel>
                                <Select
                                    value={values.age}
                                    onChange={handleChange}
                                    inputProps={{
                                    name: 'age',
                                    id: 'filled-age-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                    <em>Todas</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Dentistas</MenuItem>
                                    <MenuItem value={20}>Pisicologos</MenuItem>
                                    <MenuItem value={30}>Nutricionistas</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer 
                open={drawerOpended} 
                docked={false} 
                onRequestChange={() => setdrawerOpended(!drawerOpended)}>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Perfis</ListItem>
            <ListItem>Especialidades</ListItem>
            <ListItem>Sobre</ListItem>
          </List>
        </ Drawer>
        </MuiThemeProvider>
    </div>
  );
}