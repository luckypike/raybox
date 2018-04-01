import React from 'react';
import PropTypes from 'prop-types';

import autosize from 'autosize';

import Close from '!svg-react-loader!./close.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({
      form: !prevState.form
    }), function() {
      document.body.classList.toggle('hwnhf', this.state.form)
    });
  }

  render() {
    return (
      <div>
        <div className="btn" onClick={this.toggleForm}>
          {this.props.text}
        </div>

        {this.state.form &&
          <FormD toggleForm={this.toggleForm} />
        }
      </div>
    );
  }
}

class FormD extends React.Component {
  componentDidMount() {
    autosize(this.message);
  }

  componentWillUnmount() {
    autosize.destroy(this.message);
  }

  render() {
    return (
      <div className="form_wrapper">
        <div className="form">
          <div className="form_close" onClick={this.props.toggleForm}>
            <Close />
          </div>

          <form>
            <div className="form_inputs">
              <div className="form_inputs_item">
                <label htmlFor="name">
                  Имя
                </label>

                <input type="text" name="name" />
              </div>
              <div className="form_inputs_item">
                <label htmlFor="phone">
                  Телефон
                </label>

                <input type="text" name="phone" />
              </div>
              <div className="form_inputs_item">
                <label htmlFor="message">
                  Сообщение
                </label>

                <textarea name="message" ref={(message) => { this.message = message; }} />
              </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
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
