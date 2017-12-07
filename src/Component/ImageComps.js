import React, {Component} from 'react';
import ImageViewer from './ImageViewer';
class Image extends Component{
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
class ImageClass extends Component{
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
       <ImageViewer _vis={this.state.viss} _src={"./img/Image/"+ this.props.num + ".png"} onClick={this.on}/>
     </div>);
   }
  }

export default Image;