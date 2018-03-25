import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class WorksPage extends React.Component {
  render() {
    return (
      <div className="page page_works">
        <Helmet>
          <title>Наши работы</title>
          <meta name="description" content="Мы оформили уже более двухсот автомобилей по всей стране." />
        </Helmet>

        <h1>Наши работы</h1>
        <p>Мы оформили уже более двухсот автомобилей по всей стране.</p>
      </div>
    );
  }
}

export default WorksPage;
