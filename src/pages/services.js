import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class ServicesPage extends React.Component {
  render() {
    return (
      <div className="page page_services">
        <Helmet>
          <title>Услуги</title>
          <meta name="description" content="Придаем вашему автомобилю фирменный стиль." />
        </Helmet>

        <h1>Услуги</h1>
        <p>Придаем вашему автомобилю фирменный стиль.</p>
      </div>
    );
  }
}

export default ServicesPage;
