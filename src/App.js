import React , {Component}from 'react';
import ReactDOM from 'react-dom';
import './app.css';
class Navi extends React.Component{
  constructor(){
    super()
    this.state = {showResults: true};
  }
  render(){
    if(this.state.showResults){
    return(
      <div className="navigator">
      <button className="ImageButton" onClick={this.Click1}>Image</button>
      <button className="VideoButton" onClick={this.Click2}>Video</button>
      </div>
    );}
    else{
      return(
        <h1 onClick={this.hideClick}>null</h1>
      );
    }
  }
  Click1(){
    window.scrollTo(0,260);
  }
  Click2(){
    let sizeDetector = parseInt((1232-window.innerWidth)/200)+1;
    if(1232-window.innerWidth < 0){
      window.scrollTo(0,1043);
    }
    else{
      switch(sizeDetector){
        case 5:
          window.scrollTo(0,4243);
          break;
        case 4:
          window.scrollTo(0,2363);
          break;
        default:
          window.scrollTo(0,sizeDetector*200 + 1043);
          break;
      }
    }
  }
}
class App extends React.Component {

  render() {
    return (
      <div className = "FullApp">
        <div className="Navi">
        <Navi/>
      </div>
      <div className="App">
        <div className="Title">
          <TextGlitcher inputText = "Kwon Media Gallery" />
          <h3>Still Image / BGA</h3>
        </div>
        <div className="Image">
          <Image/>
        </div>
        <div className="Video">
          <Video/>
        </div>
        <div>
          <h4 className="Credit">Kwontf.Net Version 0.1 <br/>Telegram: @ktf1008<br/> Kakao, Email: ktf1008@naver.com </h4>
          </div>
      </div>
      </div>
    );
  }
}
class Video extends React.Component{
  constructor(){

    super();
    this.value = {
      VideoArray: Array.from({length: 5}, (value,index)=>index+1)
    };
  }//
  render(){
    return(
      <div>
        <h4>Video</h4>
        <div className = "videoFullContainer">
        {
          this.value.VideoArray.map((i)=>{
            return(
              <VideoClass key={i} num = {i}/>
            )
          })
        }
        </div>
      </div>
    )
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
class ImageClass extends React.Component{
  constructor(props){
    super(props)
    this.state = {viss: false};
    this.on = this.on.bind(this);
  }
  on(){
    this.setState({viss: !this.state.viss});
  }
 render(){
   let data = (require('./MetaData.json')).ImageMeta;
   let rowNum = data[(this.props.num)-1].text.split('</br>').length;
   return(
   <div className = "imageContainer" onClick = {this.on}>
      <img src = {"./img/Image/"+ this.props.num + ".png"} alt = {this.props.num} className = {"image"+this.props.num+ " image"}/>
      <p className="ImageText">
      {
        data[(this.props.num)-1].text.split('</br>').map((line,index)=>{
        if(index+1 === rowNum){
          return(
            <span key={this.props.num+"of"+index}>{line}</span>);
        }
        else{
       return(
         <span key={this.props.num+"of"+index}>{line}<br/></span>
       );}
     })}</p>
     <Viewer _vis={this.state.viss} _src={"./img/Image/"+ this.props.num + ".png"} onClick={this.on}/>
   </div>);
 }
}
class Viewer extends React.Component{
  constructor(props){
    super(props)
    this.state = {Source: this.props._src}
  }
  render(){
    return this.props._vis && <img src={this.state.Source} className ="Viewer" alt=""/>
  }
}
class VideoClass extends React.Component{
  constructor(props){
    super(props)
    this.state = {viss: false};
    this.on = this.on.bind(this);
  }
  on(){
    this.setState({viss: !this.state.viss});
  }
  render(){
    let data = (require('./MetaData.json')).VideoMeta;
    let link = (require('./MetaData.json')).VideoLink;
    let rowNum = data[(this.props.num)-1].text.split('</br>').length;
    return(
      <div className = "videoContainer" onClick = {this.on}>
        <img src = {"./img/Video/VidPlate"+this.props.num+".png"} alt = {this.props.num} className = {"video"+this.props.num}/>
        <p className="VideoText">{
         data[(this.props.num)-1].text.split('</br>').map((line,index)=>{
          if(index+1 === rowNum){
            return(
            <span key={this.props.num+"of"+index}>{line}</span>);
          }
          else{
       return(
         <span key={this.props.num+"of"+index}>{line}<br/></span>
       );}
     })}</p>
     <VideoViewer _vis={this.state.viss} _src={link[(this.props.num)-1].link} onClick={this.on}/>
      </div>
    );
  }
}
class VideoViewer extends React.Component{
  constructor(props){
    super(props)
    this.state = {Source: this.props._src}
  }
  render(){
    return this.props._vis && <iframe allowFullScreen={true} src={this.state.Source+"?autoplay=1"} className ="VideoViewer"/>
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
