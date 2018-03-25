import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class ContactsPage extends React.Component {
  render() {
    return (
      <div className="page page_contacts">
        <Helmet>
          <title>Контакты</title>
          <meta name="description" content="Вы можете связаться с нами по телефону, электронной почте или в социальных сетях." />
        </Helmet>

        <h1>Контакты</h1>
        <p>Вы можете связаться с нами по телефону, электронной почте или в социальных сетях.</p>
      </div>
    );
  }
}

export default ContactsPage;
