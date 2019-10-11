import React, {Component} from 'react';
import NavBar from './ui/NavBar';
import Profiles from './container/Profiles';
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
        <Profiles />
      </div>         
    );
  }
}

export default App; 