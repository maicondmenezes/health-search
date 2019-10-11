import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange500, brown500} from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: brown500
  }
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      drawerOpended: false
    }
  };
  _toggleDrawer () {
    this.setState({
      drawerOpended: !this.state.drawerOpended
    });
  };
  render() {
      
    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <AppBar title="Unieloo Health Search" onLeftIconButtonClick ={() => this._toggleDrawer()}/>
        <Drawer open={this.state.drawerOpended} docked={false} onRequestChange={() => this._toggleDrawer()}>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Perfis</ListItem>
            <ListItem>Especialidades</ListItem>
            <ListItem>Sobre</ListItem>
          </List>
        </ Drawer>

      </MuiThemeProvider>
      
    );
  }
}

export default App; 