import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextGlitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArray: Array.from({ length: this.props.text.length }, () => ' '),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.initialTick(), 80);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  initialTick() {
    const charIndex = Math.floor(Math.random() * this.props.text.length);
    const newTextArray = this.state.textArray.map((elem, index) => {
      if (index === charIndex) {
        return this.props.text[index];
      }
      return elem;
    });
    this.setState({ textArray: newTextArray });
    if (this.state.textArray.join('') === this.props.text) {
      clearInterval(this.timer);
      this.timer = setInterval(
        () => this.glitchTick(Math.floor(Math.random() * this.state.textArray.length)),
        2500,
      );
    }
  }

  glitchTick(charIndex) {
    let tmpChar = Math.random().toString(36).substr(2, 1);
    if (Math.random() >= 0.5) {
      tmpChar = tmpChar.toUpperCase();
    }
    const newTextArray = this.state.textArray.map((elem, index) => {
      if (index === charIndex) {
        return tmpChar;
      }
      return elem;
    });
    this.setState({ textArray: newTextArray });
    this.timer = setTimeout(() => this.recoveryTick(charIndex), 100);
  }

  recoveryTick(charIndex) {
    const newTextArray = this.state.textArray.map((elem, index) => {
      if (index === charIndex) {
        return this.props.text[index];
      }
      return elem;
    });
    this.setState({ textArray: newTextArray });
  }

  render() {
    return (
      <span className="TextGlitcher">
        {this.state.textArray.join('')}
      </span>
    );
  }
}

TextGlitcher.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextGlitcher;
