import React from 'react';
import Link from 'gatsby-link';
import Form from '../Form';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact_text">
          <p>
            Готовы к сотрудничеству?
          </p>
          <p>
            Напишите или позвоните нам.
          </p>

        </div>

        <div className="contact_buttons">
          <Form text="Заказать услугу" />
          <Link to="/contacts" className="btn">Контакты</Link>
        </div>
      </div>
    );
  }
}

export default Contact;
