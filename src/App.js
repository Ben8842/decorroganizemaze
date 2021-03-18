import React, { Component } from "react";
import Building from "./components/Building";
import Bar from "./components/Bar";
import Circle from "./components/Circle";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutFlag: false,
      projectFlag: false,
      contactFlag: false,
    };
  }

  showAbout() {
    if (this.state.aboutFlag === true) {
      this.setState({ aboutFlag: false });
    } else
      this.setState({
        aboutFlag: true,
        projectFlag: false,
        contactFlag: false,
      });
  }
  showProjects() {
    if (this.state.projectFlag === true) {
      this.setState({ projectFlag: false });
    } else
      this.setState({
        projectFlag: true,
        aboutFlag: false,
        contactFlag: false,
      });
  }
  showContact() {
    if (this.state.contactFlag === true) {
      this.setState({ contactFlag: false });
    } else
      this.setState({
        contactFlag: true,
        aboutFlag: false,
        projectFlag: false,
      });
  }

  render() {
    const contact = (
      <div>
        <Circle sizeValue="20" width="34" height="5" />

        <p id="nameT">
          <p> Hello World </p>

          <Circle sizeValue="20" width="34" height="5" />
        </p>
      </div>
    );
    const basic = (
      <div id="nameT">
        Hello World <p id="nameT">Yes</p>
      </div>
    );
    const projectContainer = (
      <div id="nameT">
        <Bar sizeValue="20" width="34" height="5" />
        More things here
        <Building sizeValue="20" />
      </div>
    );
    const aboutContainer = (
      <div id="nameT">
        <Bar sizeValue="20" width="34" height="5" />
        Super great things here
      </div>
    );
    return (
      <div id="more">
        <Bar sizeValue="20" width="36" height="5" />
        <button id="topinfo" onClick={() => this.showAbout()}>
          Circle
        </button>
        <button id="topinfo" onClick={() => this.showProjects()}>
          Bar
        </button>
        <button id="topinfo" onClick={() => this.showContact()}>
          More
        </button>

        {!this.state.aboutFlag &&
        !this.state.projectFlag &&
        !this.state.contactFlag
          ? basic
          : null}

        <div>{"    "}</div>
        {this.state.contactFlag ? contact : null}
        {this.state.aboutFlag ? aboutContainer : null}
        {this.state.projectFlag ? projectContainer : null}
        <Bar width="5" height="20" />
        <Bar width="5" height="20" />
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
