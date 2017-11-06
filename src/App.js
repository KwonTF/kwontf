import React from 'react';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Title">
          <h1>Kwon Practical Series</h1>
          <h3>Still Image / BGA</h3>
        </div>
        <div className="Image">
          <Image/>
        </div>
      </div>
    );
  }
}
class Image extends React.Component{
  constructor(){
    super();
    this.value = {
      ImageArray: Array.from({length: 18}, (v, k) => k+1)
    };
  }
  render(){
    return(
      <div>
        <h4>Image</h4>
        {
          this.value.ImageArray.map((i) => {
            return(
              <ImageClass num = {i} key = {i}/>
            );
          })
        }
      </div>
    );
  }
}

class ImageClass extends React.Component{
 render(){
   return(
   <div>
     <img src = {"./img/"+ this.props.num + ".png"} alt = {this.props.num}/>
     <p>{this.props.num}</p>
   </div>);
 }
}
export default App;
/*
function Square(props){
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsnext: true
    };
  }
  handleClick(i){
    const squares = this.state.squares.slice();
    if(calculateWinner(squares)||squares[i]){
      return;
    }
    if(this.state.xIsnext)
      squares[i] = '으';
    else
      squares[i] = '헿';
    this.setState({squares: squares, xIsnext: !this.state.xIsnext});
  }
  renderSquare(i) {
    return( <Square value={this.state.squares[i]}
    onClick = {()=> this.handleClick(i)}
    />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'winner: 나오쟈아앙 ('+winner+')';
    }
    else{
    if(this.state.xIsnext)
      status = 'Next player: 으';
    else
      status = 'Next player: 헿';
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          //<div>{ status }</div>
          //<ol>{ TODO }</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;*/