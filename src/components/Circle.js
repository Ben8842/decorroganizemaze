import React, { Component } from "react";

function distance(ex, wy, zize) {
  var yhr = zize / 2;
  var center = [zize / 2, zize / 2];
  var xhold = ex - center[0];
  var xholdmore = Math.pow(xhold, 2);
  console.log("x-x squared");
  console.log(xholdmore);

  var yhold = wy - center[1];
  var yholdmore = Math.pow(yhold, 2);
  console.log("y-y squared");
  console.log(yholdmore);
  var dist = Math.sqrt(xholdmore + yholdmore);
  console.log("distance");
  console.log(dist);
  if (dist >= yhr) {
    console.log("distance false");
    return false;
  } else {
    console.log("distance true");
    return true;
  }
}

class Circle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathO: [[this.props.height / 2, this.props.height / 2]],
      stepback: 3,
      complete: false,
      icon: [0, 0],
      stepz: 0,
      controltime: false,
      mazeProcessing: false,
      mazeEnd: false,
      pointz: 0,
      niceMove: false,
      wallMove: false,
      wallscore: 0,
      timeT: 0,
      flagStart: false,
      width: this.props.width,
      height: this.props.height,
    };
  }

  componentDidMount() {
    console.log("mount");
    this.pathgeneratorOrigin();
  }

  renderCircle(x, y) {
    var { pathO, stepback } = this.state;

    var bid = "b1";
    var bad = "bplus";

    var i = null;
    for (i = 0; i < pathO.length; i++) {
      if (
        x === pathO[pathO.length - 1][0] &&
        y === pathO[pathO.length - 1][1] &&
        stepback < pathO.length
      ) {
        return <button className="blue" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][0] &&
        y ===
          pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][1]
      ) {
        return <button className="orange" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 1 < 0 ? 0 : pathO.length - 1 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 1 < 0 ? 0 : pathO.length - 1 - stepback
          ][1]
      ) {
        return <button className="orange2" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 2 < 0 ? 0 : pathO.length - 2 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 2 < 0 ? 0 : pathO.length - 2 - stepback
          ][1]
      ) {
        return <button className="orange3" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 3 < 0 ? 0 : pathO.length - 3 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 3 < 0 ? 0 : pathO.length - 3 - stepback
          ][1]
      ) {
        return <button className="orange4" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 4 < 0 ? 0 : pathO.length - 4 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 4 < 0 ? 0 : pathO.length - 4 - stepback
          ][1]
      ) {
        return <button className="orange5" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 5 < 0 ? 0 : pathO.length - 5 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 5 < 0 ? 0 : pathO.length - 5 - stepback
          ][1]
      ) {
        return <button className="orange6" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 6 < 0 ? 0 : pathO.length - 6 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 6 < 0 ? 0 : pathO.length - 6 - stepback
          ][1]
      ) {
        return <button className="orange7" codex={x} codey={y}></button>;
      } else if (
        x ===
          pathO[
            pathO.length - stepback - 7 < 0 ? 0 : pathO.length - 7 - stepback
          ][0] &&
        y ===
          pathO[
            pathO.length - stepback - 7 < 0 ? 0 : pathO.length - 7 - stepback
          ][1]
      ) {
        return <button className="orange8" codex={x} codey={y}></button>;
      } else if (x === pathO[i][0] && y === pathO[i][1]) {
        return <button className={bad} codex={x} codey={y}></button>;
      }
    }
    return <button className={bid} codex={x} codey={y}></button>;
  }

  pathgeneratorOrigin() {
    var interval = setInterval(this.pathgenerator.bind(this), 25);
    this.setState({
      interval: interval,
      mazeProcessing: true,
      flagStart: true,
    });
  }

  pathgenerator() {
    var { pathO, height } = this.state;

    var exwy = pathO;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function pastDirection(x1, x2, y1, y2) {
      if (x1 === x2 && y1 > y2) {
        return 1;
        //up
      } else if (x1 === x2 && y1 < y2) {
        return 2;
        //down
      } else if (x1 > x2 && y1 === y2) {
        return 3;
        //left
      } else if (x1 < x2 && y1 === y2) {
        return 4;
        //right
      }
    }

    if (pathO.length === 1) {
      var chooser = randomNumber(1, 3);

      if (chooser === 1) {
        //   exwy.push([height / 2, height / 2], [height / 2 + 1, height / 2]);
        exwy.push([height / 2 + 1, height / 2], [height / 2 + 2, height / 2]);
      } else if (chooser === 2) {
        //  exwy.push([height / 2, height / 2], [height / 2, height / 2 + 1]);
        exwy.push([height / 2, height / 2 + 1], [height / 2, height / 2 + 2]);
      }
    } else {
      var potentialMove = [
        [exwy[exwy.length - 1][0] + 2, exwy[exwy.length - 1][1]],
        [exwy[exwy.length - 1][0] - 2, exwy[exwy.length - 1][1]],
        [exwy[exwy.length - 1][0], exwy[exwy.length - 1][1] + 2],
        [exwy[exwy.length - 1][0], exwy[exwy.length - 1][1] - 2],
      ];

      //these flags below mark whether the potential move exists in move array
      var one = null;
      var two = null;
      var three = null;
      var four = null;
      //these flags below mark whether the potential move is on the board or off the board
      var oneBoard = null;
      var twoBoard = null;
      var threeBoard = null;
      var fourBoard = null;

      var u = 0;
      var i = 0;
      var p = 0;
      var k = 0;
      for (u = 0; u < exwy.length; u++) {
        if (
          exwy[u][0] === potentialMove[0][0] &&
          exwy[u][1] === potentialMove[0][1]
        ) {
          one = true;
          break;
        } else one = false;
      }
      for (i = 0; i < exwy.length; i++) {
        if (
          exwy[i][0] === potentialMove[1][0] &&
          exwy[i][1] === potentialMove[1][1]
        ) {
          two = true;
          break;
        } else two = false;
      }
      for (p = 0; p < exwy.length; p++) {
        if (
          exwy[p][0] === potentialMove[2][0] &&
          exwy[p][1] === potentialMove[2][1]
        ) {
          three = true;
          break;
        } else three = false;
      }
      for (k = 0; k < exwy.length; k++) {
        if (
          exwy[k][0] === potentialMove[3][0] &&
          exwy[k][1] === potentialMove[3][1]
        ) {
          four = true;
          break;
        } else four = false;
      }
      ////////////////////// this determines if its on the board.
      var boards = [oneBoard, twoBoard, threeBoard, fourBoard];
      for (var z = 0; z < 4; z++) {
        var x = potentialMove[z][0];
        var y = potentialMove[z][1];
        var xw = this.props.width;
        var yh = this.props.height;

        if (
          0 <= x &&
          x <= xw &&
          0 <= y &&
          y <= yh - 1 &&
          distance(x, y, yh) === true
        ) {
          boards[z] = false;
        } else boards[z] = true;
      }

      /////////////////////////////////////////
      var actualPotentialMoves = [];
      if (one === false && boards[0] === false) {
        actualPotentialMoves.push(potentialMove[0]);
      }
      if (two === false && boards[1] === false) {
        actualPotentialMoves.push(potentialMove[1]);
      }
      if (three === false && boards[2] === false) {
        actualPotentialMoves.push(potentialMove[2]);
      }
      if (four === false && boards[3] === false) {
        actualPotentialMoves.push(potentialMove[3]);
      }
      //array of valid potential moves (unvisited and on the board) is logged below

      if (actualPotentialMoves.length === 0) {
        this.morePathFinders();
      } else if (pathO.length !== 1) {
        this.state.stepback = 3;

        var chooserNext = randomNumber(1, actualPotentialMoves.length + 1);

        var newDir = pastDirection(
          exwy[exwy.length - 1][0],
          actualPotentialMoves[chooserNext - 1][0],
          exwy[exwy.length - 1][1],
          actualPotentialMoves[chooserNext - 1][1]
        );

        if (newDir === 3) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0] + 1,
              actualPotentialMoves[chooserNext - 1][1],
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        } else if (newDir === 4) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0] - 1,
              actualPotentialMoves[chooserNext - 1][1],
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        } else if (newDir === 1) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0],
              actualPotentialMoves[chooserNext - 1][1] + 1,
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        } else if (newDir === 2) {
          exwy.push(
            [
              actualPotentialMoves[chooserNext - 1][0],
              actualPotentialMoves[chooserNext - 1][1] - 1,
            ],
            actualPotentialMoves[chooserNext - 1]
          );
        }
      }
    }

    this.setState((state) => {
      return { pathO: exwy };
    });
    this.forceUpdate();
  }

  morePathFinders() {
    var { pathO, stepback } = this.state;

    var exwy = pathO;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var zcounter = stepback;
    function pastAbsDirection(x1, x2, y1, y2) {
      if (x1 === x2 && y1 > y2) {
        return 1;
        //up
      } else if (x1 === x2 && y1 < y2) {
        return 2;
        //down
      } else if (x1 > x2 && y1 === y2) {
        return 3;
        //left
      } else if (x1 < x2 && y1 === y2) {
        return 4;
        //right
      }
    }

    var potentialMove = [
      [exwy[exwy.length - zcounter][0] + 2, exwy[exwy.length - zcounter][1]],
      [exwy[exwy.length - zcounter][0] - 2, exwy[exwy.length - zcounter][1]],
      [exwy[exwy.length - zcounter][0], exwy[exwy.length - zcounter][1] + 2],
      [exwy[exwy.length - zcounter][0], exwy[exwy.length - zcounter][1] - 2],
    ];

    //these flags below mark whether the potential move exists in move array
    var one = null;
    var two = null;
    var three = null;
    var four = null;
    //these below mark whether the potential move is on the board
    var oneBoard = null;
    var twoBoard = null;
    var threeBoard = null;
    var fourBoard = null;
    var u = 0;
    var i = 0;
    var p = 0;
    var k = 0;

    for (u = 0; u < exwy.length; u++) {
      if (
        exwy[u][0] === potentialMove[0][0] &&
        exwy[u][1] === potentialMove[0][1]
      ) {
        one = true;
        break;
      } else one = false;
    }
    for (i = 0; i < exwy.length; i++) {
      if (
        exwy[i][0] === potentialMove[1][0] &&
        exwy[i][1] === potentialMove[1][1]
      ) {
        two = true;
        break;
      } else two = false;
    }
    for (p = 0; p < exwy.length; p++) {
      if (
        exwy[p][0] === potentialMove[2][0] &&
        exwy[p][1] === potentialMove[2][1]
      ) {
        three = true;
        break;
      } else three = false;
    }
    for (k = 0; k < exwy.length; k++) {
      if (
        exwy[k][0] === potentialMove[3][0] &&
        exwy[k][1] === potentialMove[3][1]
      ) {
        four = true;
        break;
      } else four = false;
    }

    ////////////////////// this determines if its on the board.
    var boards = [oneBoard, twoBoard, threeBoard, fourBoard];
    for (var z = 0; z < 4; z++) {
      var x = potentialMove[z][0];
      var y = potentialMove[z][1];
      var xw = this.props.width;
      var yh = this.props.height;

      if (
        0 <= x &&
        x <= xw &&
        0 <= y &&
        y <= yh - 1 &&
        distance(x, y, yh) === true
      ) {
        boards[z] = false;
      } else boards[z] = true;
    }

    /////////////////////////////////////////

    var actualPotentialMoves = [];
    if (one === false && boards[0] === false) {
      actualPotentialMoves.push(potentialMove[0]);
    }
    if (two === false && boards[1] === false) {
      actualPotentialMoves.push(potentialMove[1]);
    }
    if (three === false && boards[2] === false) {
      actualPotentialMoves.push(potentialMove[2]);
    }
    if (four === false && boards[3] === false) {
      actualPotentialMoves.push(potentialMove[3]);
    }
    //array of valid potential moves (unvisited and on the board) is logged below
    //console.log("the actual Potential VALID moves are: ");
    //console.log(actualPotentialMoves);

    if (actualPotentialMoves.length === 0) {
      //if length is zero here, then you know there is a 'dead end' in the maze
    } else if (pathO.length !== 1) {
      var chooserNext = randomNumber(1, actualPotentialMoves.length + 1);

      //execution and use of a function that determines the direction of the last move
      var newDir = pastAbsDirection(
        exwy[exwy.length - zcounter][0],
        actualPotentialMoves[chooserNext - 1][0],
        exwy[exwy.length - zcounter][1],
        actualPotentialMoves[chooserNext - 1][1]
      );

      //determine the new coordinates based on the direction (coded 1-4)

      if (newDir === 3) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0] + 1,
            actualPotentialMoves[chooserNext - 1][1],
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      } else if (newDir === 4) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0] - 1,
            actualPotentialMoves[chooserNext - 1][1],
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      } else if (newDir === 1) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0],
            actualPotentialMoves[chooserNext - 1][1] + 1,
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      } else if (newDir === 2) {
        exwy.push(
          [
            actualPotentialMoves[chooserNext - 1][0],
            actualPotentialMoves[chooserNext - 1][1] - 1,
          ],
          actualPotentialMoves[chooserNext - 1]
        );
      }
    }
    if (stepback < pathO.length) {
      this.setState((state) => {
        return { pathO: exwy, stepback: state.stepback + 2 };
      });
    } else {
      //if the stepback becomes larger than the length of the 'move' array pathO
      //then we know the maze is complete and we can end the interval
      clearInterval(this.state.interval);
      this.setState((state) => {
        return { controltime: true, mazeProcessing: false, complete: true };
      });
    }

    this.forceUpdate();
  }

  //  const funtimer = <div>{MyStopwatch()}</div>;

  render() {
    const elementS = [];
    const elementZ = [];

    var x;
    var y;
    for (y = 0; y < this.props.height; y++) {
      for (x = 0; x < this.props.width; x++) {
        elementS.push(this.renderCircle(x, y));
      }
      elementZ.push(
        <div className="newLine">
          {elementS.map((value, index) => {
            return value;
          })}
        </div>
      );
      for (x = 0; x < this.props.width; x++) {
        elementS.pop();
      }
    }
    /*
    const againButton = (
      <div>
        <button id="largebutton" onClick={() => this.mazeAgain()}>
          New Maze
        </button>
      </div>
    );
*/
    const entireThingz = (
      <div className="entireThing">
        <span id="mazeSpot">
          {elementZ.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </span>
      </div>
    );

    return (
      <span className="entireThing">
        <span className="wrapper">{entireThingz}</span>
      </span>
    );
  }
}

export default Circle;
