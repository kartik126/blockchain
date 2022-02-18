
import Navbar from "./Components/Navbar";

import React, { Component } from "react";export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  render() {
    return (
      <div className="App" > 
        <Navbar showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
     
      </div>
    );
  }
}

export default App;
