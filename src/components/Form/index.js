import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false
    }
  }

  render() {
    return (
      <div className="btn">{this.props.text}</div>
    );
  }
}

class FormD extends React.Component {
  render() {
    return (
      <div className="form">
      </div>
    );
  }
}

Form.propTypes = {
  text: PropTypes.string
};

Form.defaultProps = {
  text: 'Оставить заявку',
};

export default Form;
