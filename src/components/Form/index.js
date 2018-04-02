import React from 'react';
import PropTypes from 'prop-types';

import autosize from 'autosize';
import axios from 'axios';

import Close from '!svg-react-loader!./close.svg';

import { withPrefix } from 'gatsby-link';

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
  constructor(props) {
    super(props);
    this.state = {
      send: false,
      notify: '',
      name: '',
      phone: '',
      message: ''
    };
  }

  componentDidMount() {
    autosize(this.message);
  }

  componentWillUnmount() {
    autosize.destroy(this.message);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) =>  {
    this.setState({
      send: true
    });

    axios.post(withPrefix('/mail.php'), {
      project_name: 'RayBox',
      admin_email: 'info@raybox.su',
      form_subject: 'Сообщение с сайта',
      name: this.state.name,
      phone: this.state.phone,
      message: this.state.message
    })
      .then(res => {
        this.setState({
          notify: res.data
        });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="form_wrapper">
        <div className="form">
          <div className="form_close" onClick={this.props.toggleForm}>
            <Close />
          </div>

          {this.state.send &&
            <p>
              {this.state.notify.length > 0 ? (
                <span>{this.state.notify}</span>
              ) : (
                <span>Отсылаем сообщение...</span>
              )}
            </p>
          }

          {!this.state.send &&
            <form onSubmit={this.handleSubmit}>
              <div className="form_inputs">
                <div className="form_inputs_item">
                  <label htmlFor="name">
                    Имя
                  </label>

                  <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
                </div>
                <div className="form_inputs_item">
                  <label htmlFor="phone">
                    Телефон
                  </label>

                  <input type="text" name="phone" onChange={this.handleInputChange} value={this.state.phone} />
                </div>
                <div className="form_inputs_item">
                  <label htmlFor="message">
                    Сообщение
                  </label>

                  <textarea name="message" ref={(message) => { this.message = message; }} onChange={this.handleInputChange} value={this.state.message} />
                </div>
              </div>
              <div className="form_inputs_submit">
                <p>
                  Отправляя персональные данные из данной формы я подтверждаю свое согласие на обработку персональных данных и соглашаюсь на <a href={withPrefix('/rules.pdf')} target="_blank">политику конфиденциальности</a>
                </p>
                <input type="submit" value="Отправить" className="btn" />
              </div>
            </form>
          }
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
