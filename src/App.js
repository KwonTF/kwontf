import React from 'react';
import './app.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Title">
          <TextGlitcher inputText = "Kwon Practical Series" />
          <h3>Still Image / BGA</h3>
        </div>
        <div className="Image">
          <Image/>
        </div>
        <div className="VGA">
          <h1>Video</h1>
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
        <div className="imageFullContainer">
        {
          this.value.ImageArray.map((i) => {
            return(
              <ImageClass key = {i} num = {i}/>
            );
          })
        }
        </div>
      </div>
    );
  }
}
//
class ImageClass extends React.Component{
 render(){
   let data = (require('./ImageData.json')).ImageMeta;
   let rowNum = data[(this.props.num)-1].text.split('</br>').length;
   return(
   <div className = "imageContainer">
     <img src = {"./img/"+ this.props.num + ".png"} alt = {this.props.num} className = {"image"+this.props.num}/>
       <p className="ImageText">{
         data[(this.props.num)-1].text.split('</br>').map((line,index)=>{
          if(index+1 === rowNum){
            <span key={this.props.num+"of"+index}>{line}</span>
          }
       return(
         <span key={this.props.num+"of"+index}>{line}<br/></span>
       )
     })}</p>
   </div>);
 }
}
class TextGlitcher extends React.Component{
  constructor(props){
    super(props);
    this.state = { OriginText: this.props.inputText, Text: Array.from({length: this.props.inputText.length}, () => ' ').join(''), elapsed:0,  start: Date.now()};
  }
  componentDidMount(){
    this.timer = setInterval(()=>this.tick(), 80);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  tick(){
    this.setState({elapsed: new Date() - this.state.start});
    let charSelector = Math.floor(Math.random()*this.state.OriginText.length);
    let newText = this.state.Text.substr(0, charSelector) + this.state.OriginText.charAt(charSelector) + this.state.Text.substr(charSelector+1);
    this.setState({Text: newText});
    if(this.state.Text === this.state.OriginText){
      clearInterval(this.timer);
      this.timer = setInterval(()=>this.tick2(Math.random()*this.state.Text.length), 2500);
    }
  }
  tick2(randomNumber){
    let tempchar = Math.random().toString(36).substr(2,1);
    if(Math.random() >= 0.5){
      tempchar = tempchar.toUpperCase();
    }
    let newText = this.state.Text.substr(0, randomNumber) + tempchar + this.state.Text.substr(randomNumber+1);
    this.setState({Text: newText});
    this.timer = setTimeout(()=>this.recover(randomNumber), 200);
  }
  recover(index){
    let newText = this.state.Text.substr(0, index) + this.state.OriginText.charAt(index) + this.state.Text.substr(index+1);
    this.setState({Text: newText});
  }
  render(){
    // This will give a number with one digit after the decimal dot (xx.x): 

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.
    return <p className = "text">{this.state.Text}</p>;
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