import React, {Component} from 'react';
import './Style/app.css';
import Navi from './Component/Navi';
import Image from './Component/ImageComps';
import Video from './Component/VideoComps';
import TextGlitcher from './Component/TextGlitcher';
class App extends Component {
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
          <h4 className="Credit">Kwontf.Net Version 0.3 <br/>Telegram: @ktf1008<br/> Kakao, Email: ktf1008@naver.com </h4>
          </div>
      </div>
      </div>
    );
  }
}
export default App;
