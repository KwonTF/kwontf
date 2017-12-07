import React, {Component} from 'react';
class TextGlitcher extends Component{
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
export default TextGlitcher;