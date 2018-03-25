import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';

import 'normalize.css';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>RayBoxGarage — тюнинг и ремонт автомобильной оптики</title>
      <meta name="description" content="Наша кампания занимается ремонтом и стайлингом вашего автомобия! Если вы хотите, чтобы ваш автомобиль выделялся, то тогда вам к нам!" />
      <meta name="keywords" content="Ремонт фар, Пересвет салона, Тюнинг фар, Ремонт сколов, Полировка фар, Шумоизоляция" />
    </Helmet>
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
