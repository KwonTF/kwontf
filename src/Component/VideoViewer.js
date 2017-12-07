import React, {Component} from 'react';
class VideoViewer extends Component{
    constructor(props){
      super(props)
      this.state = {Source: this.props._src}
    }
    render(){
      return this.props._vis && <iframe allowFullScreen={true} src={this.state.Source+"?autoplay=1"} title={this.state.Source} className="VideoViewer"/>
    }
  }
export default VideoViewer;
