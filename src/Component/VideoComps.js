import React, {Component} from 'react';
import VideoViewer from './VideoViewer';
class Video extends Component{
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
class VideoClass extends Component{
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

export default Video;