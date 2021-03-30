import React, { Component } from "react";

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathO: [[0, 0]],
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
      sizeHold: this.props.pixelSize,
    };
  }

  componentDidMount() {
    this.pathgeneratorOrigin();
  }

  renderSquare(x, y) {
    var { pathO, stepback, sizeHold, icon } = this.state;

    var i = null;
    for (i = 0; i < pathO.length; i++) {
      if (stepback === pathO.length && x === icon[0] && y === icon[1]) {
        return (
          <button
            className={"bSquare bSquare--grey bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
      } else if (
        x === pathO[pathO.length - 1][0] &&
        y === pathO[pathO.length - 1][1] &&
        stepback < pathO.length
      ) {
        return (
          <button
            className={"bSquare bSquare--grey bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
      } else if (
        x ===
          pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][0] &&
        y ===
          pathO[pathO.length - stepback < 0 ? 0 : pathO.length - stepback][1]
      ) {
        return (
          <button
            className={"bSquare bSquare--pink bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--pink2 bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--purple bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--blue bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--blue2 bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--green bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--yellow bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
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
        return (
          <button
            className={"bSquare bSquare--orange bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
      } else if (x === pathO[i][0] && y === pathO[i][1]) {
        return (
          <button
            className={"bSquare bSquare--grey bSquare--" + sizeHold}
            codex={x}
            codey={y}
          ></button>
        );
      }
    }
    return (
      <button
        className={"bSquare bSquare--black bSquare--" + sizeHold}
        codex={x}
        codey={y}
      ></button>
    );
  }

  pathgeneratorOrigin() {
    var interval = setInterval(this.pathgenerator.bind(this), 25);

    this.setState({
      interval: interval,
      mazeProcessing: true,
      flagStart: true,
    });
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  pastDirection(x1, x2, y1, y2) {
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

  pathgenerator() {
    var { pathO } = this.state;

    var exwy = pathO;

    if (pathO.length === 1) {
      var chooser = this.randomNumber(1, 3);

      if (chooser === 1) {
        exwy.push([1, 0], [2, 0]);
      } else if (chooser === 2) {
        exwy.push([0, 1], [0, 2]);
      }
    } else {
      var potentialMove = this.calculatesCoordinatesPotentialMoves(exwy, 1);

      var exist = this.calculatesIfCoordinatesAlreadyVisited(
        exwy,
        potentialMove
      );
      ////////////////////// this determines if its on the board.
      var boards = this.calculateIfMoveOnBoard(potentialMove);
      /////////////////////////////////////////
      var actualPotentialMoves = [];
      if (exist[0] === false && boards[0] === false) {
        actualPotentialMoves.push(potentialMove[0]);
      }
      if (exist[1] === false && boards[1] === false) {
        actualPotentialMoves.push(potentialMove[1]);
      }
      if (exist[2] === false && boards[2] === false) {
        actualPotentialMoves.push(potentialMove[2]);
      }
      if (exist[3] === false && boards[3] === false) {
        actualPotentialMoves.push(potentialMove[3]);
      }
      //array of valid potential moves (unvisited and on the board) is logged below

      if (actualPotentialMoves.length === 0) {
        this.morePathFinders();
      } else if (pathO.length !== 1) {
        this.state.stepback = 3;

        var chooserNext = this.randomNumber(1, actualPotentialMoves.length + 1);

        var newDir = this.pastDirection(
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
    var zcounter = stepback;
    var potentialMove = this.calculatesCoordinatesPotentialMoves(
      exwy,
      zcounter
    );
    var exist = this.calculatesIfCoordinatesAlreadyVisited(exwy, potentialMove);
    var boards = this.calculateIfMoveOnBoard(potentialMove);

    var actualPotentialMoves = [];
    if (exist[0] === false && boards[0] === false) {
      actualPotentialMoves.push(potentialMove[0]);
    }
    if (exist[1] === false && boards[1] === false) {
      actualPotentialMoves.push(potentialMove[1]);
    }
    if (exist[2] === false && boards[2] === false) {
      actualPotentialMoves.push(potentialMove[2]);
    }
    if (exist[3] === false && boards[3] === false) {
      actualPotentialMoves.push(potentialMove[3]);
    }
    //array of valid potential moves (unvisited and on the board) is logged below
    //console.log("the actual Potential VALID moves are: ");
    //console.log(actualPotentialMoves);

    if (actualPotentialMoves.length === 0) {
      //if length is zero here, then you know there is a 'dead end' in the maze
    } else if (pathO.length !== 1) {
      var chooserNext = this.randomNumber(1, actualPotentialMoves.length + 1);

      //execution and use of a function that determines the direction of the last move
      var newDir = this.pastDirection(
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

  calculatesCoordinatesPotentialMoves(exwy, zcounter) {
    return [
      [exwy[exwy.length - zcounter][0] + 2, exwy[exwy.length - zcounter][1]],
      [exwy[exwy.length - zcounter][0] - 2, exwy[exwy.length - zcounter][1]],
      [exwy[exwy.length - zcounter][0], exwy[exwy.length - zcounter][1] + 2],
      [exwy[exwy.length - zcounter][0], exwy[exwy.length - zcounter][1] - 2],
    ];
  }

  calculateIfMoveOnBoard(potentialMove) {
    var oneBoard = null;
    var twoBoard = null;
    var threeBoard = null;
    var fourBoard = null;
    var boards = [oneBoard, twoBoard, threeBoard, fourBoard];
    for (var z = 0; z < 4; z++) {
      if (
        0 <= potentialMove[z][0] &&
        potentialMove[z][0] <= this.props.width &&
        0 <= potentialMove[z][1] &&
        potentialMove[z][1] <= this.props.height - 1
      ) {
        boards[z] = false;
      } else boards[z] = true;
    }
    return boards;
  }

  calculatesIfCoordinatesAlreadyVisited(exwy, potentialMove) {
    var exist = [null, null, null, null];

    var u = 0;
    var i = 0;
    var p = 0;
    var k = 0;

    for (u = 0; u < exwy.length; u++) {
      if (
        exwy[u][0] === potentialMove[0][0] &&
        exwy[u][1] === potentialMove[0][1]
      ) {
        exist[0] = true;
        break;
      } else exist[0] = false;
    }
    for (i = 0; i < exwy.length; i++) {
      if (
        exwy[i][0] === potentialMove[1][0] &&
        exwy[i][1] === potentialMove[1][1]
      ) {
        exist[1] = true;
        break;
      } else exist[1] = false;
    }
    for (p = 0; p < exwy.length; p++) {
      if (
        exwy[p][0] === potentialMove[2][0] &&
        exwy[p][1] === potentialMove[2][1]
      ) {
        exist[2] = true;
        break;
      } else exist[2] = false;
    }
    for (k = 0; k < exwy.length; k++) {
      if (
        exwy[k][0] === potentialMove[3][0] &&
        exwy[k][1] === potentialMove[3][1]
      ) {
        exist[3] = true;
        break;
      } else exist[3] = false;
    }
    return exist;
  }

  render() {
    const elementS = [];
    const elementZ = [];

    var x;
    var y;
    for (y = 0; y < this.props.height; y++) {
      for (x = 0; x < this.props.width; x++) {
        elementS.push(this.renderSquare(x, y));
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

export default Bar;
