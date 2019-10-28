import React from 'react';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      this.props.onSubmit(event);
      event.preventDefault();
    }
  }

  handleChange(event) {
    this.props.onChange(this.props.id, event.target.value);
  }

  render() {
    return (
      <textarea className='form-control' placeholder={this.props.placeholder}
                value={this.props.value} onChange={this.handleChange} onKeyDown={this.onEnter}/>
    )
  }
}