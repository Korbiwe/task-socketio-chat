import React from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(this.props.id, event.target.value);
  }

  render() {
    return (
      <input className='form-control' type='text' placeholder={this.props.placeholder}
             value={this.props.value} onChange={this.handleChange}/>
    )
  }
}