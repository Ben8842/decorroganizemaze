import React, { Component } from "react";
import Building from "./components/Building";
import Bar from "./components/Bar";
import Circle from "./components/Circle";
import Diamond from "./components/Diamond";

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
    const circleContainer = (
      <div>
        <Circle sizeValue="28" width="28" height="28" />

        <p id="nameT">
          <p> Hello World </p>
        </p>
      </div>
    );
    const basic = (
      <div id="nameT">
        Hello World <p id="nameT">Yes</p>
      </div>
    );
    const barContainer = (
      <div id="nameT">
        <Bar sizeValue="20" width="68" height="5" />
        More things here
        <Building sizeValue="20" />
        <Bar sizeValue="20" width="5" height="46" />
      </div>
    );
    const diamondContainer = (
      <div id="nameT">
        <Diamond height="8" />
        <Diamond height="8" pixelSize="sml" />
        <Diamond height="8" pixelSize="sml" />
        <Diamond height="8" pixelSize="sml" />
        <Diamond height="8" pixelSize="sml" />
      </div>
    );
    return (
      <div id="more">
        <button id="topinfo" onClick={() => this.showAbout()}>
          Diamond
        </button>
        <button id="topinfo" onClick={() => this.showProjects()}>
          Bar
        </button>
        <button id="topinfo" onClick={() => this.showContact()}>
          Circle
        </button>

        {!this.state.aboutFlag &&
        !this.state.projectFlag &&
        !this.state.contactFlag
          ? basic
          : null}

        <div>{"    "}</div>
        {this.state.contactFlag ? circleContainer : null}
        {this.state.aboutFlag ? diamondContainer : null}
        {this.state.projectFlag ? barContainer : null}
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
