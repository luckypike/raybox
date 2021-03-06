import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Form from '../components/Form';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

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

        <div className="map">
          <div className="map_text">
            <p>
              <a href="tel:+79103931456">+7 (910) 393-14-56</a>
            </p>
            <p><a href="mailto:info@rbgnn.su">info@rbgnn.su</a></p>
            <p>
              Нижний Новгород,
              <br />
              Правдинская улица, 27А
            </p>

            <Form />
          </div>
          <div className="map_map">
            <YMaps>
              <Map state={{ center: [56.284132, 43.957638], zoom: 15 }} width="100%" height="100%">

                <Placemark
                  geometry={{
                    coordinates: [56.284132, 43.957638]
                  }}
                  properties={{
                    iconCaption: 'Правдинская, 27А',
                    balloonContent: 'RayBoxGarage Россия, Нижний Новгород, Правдинская улица, 27А'
                  }}
                  options={{
                    preset: 'islands#darkgreenAutoIcon'
                  }}
                />

              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsPage;
