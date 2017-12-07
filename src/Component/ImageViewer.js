import React, {Component} from 'react';
class ImageViewer extends Component{
    constructor(props){
      super(props)
      this.state = {Source: this.props._src}
    }
    render(){
      return this.props._vis && <img src={this.state.Source} className ="Viewer" alt=""/>
    }
  }
export default ImageViewer;