import React, {Component} from 'react';
class Navi extends Component{
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
      let sizeDetector = parseInt((1232-window.innerWidth)/200, 10)+1;
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

  export default Navi;