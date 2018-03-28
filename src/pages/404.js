import React from 'react';

import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <div className="page page_404">
    <Helmet>
      <title>404: не найдено</title>
      <meta name="description" content="страница 404 ошибки." />
    </Helmet>

    <h1>Страница не найдена</h1>
    <p>К сожалению, запрашиваемая страница не найдена, попробуйте вернуться на главную или выбрать в меню нужный пункт.</p>
  </div>
)

export default NotFoundPage;
