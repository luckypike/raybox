import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import videoNoise from './services/noise.mp4';
import videoTune from './services/tune.mp4';

class ServicesPage extends React.Component {
  render() {
    return (
      <div className="page page_services">
        <Helmet>
          <title>Услуги</title>
          <meta name="description" content="Придаем вашему автомобилю фирменный стиль." />
        </Helmet>

        <section className="intro">
          <div className="text">
            <h1>Услуги</h1>
            <p>Придаем вашему автомобилю фирменный стиль.</p>
          </div>
        </section>

        <section className="fix">
          <div className="media">
            <figure><div></div></figure>
          </div>

          <div className="text">
            <h2>
              Ремонт фар
            </h2>
            <p>
              Мы всегда сможем помочь нашему клиенту, если он попал в незначительную аварию, вследствие чего произошла поломка оптики.
            </p>
            <p>
              В таких случаях нецелесообразно покупать новый комплект фар, т.к. выгоднее отремонтировать пострадавшие.
            </p>
          </div>
        </section>

        <section className="tune">


          <div className="media">
            <figure><div></div></figure>
            <video className="video" playsInline autoPlay muted loop>
              <source src={videoTune} type="video/mp4" />
            </video>
          </div>

          <div className="text">
            <h2>
              Тюнинг фар
            </h2>
            <p>
              В вашем автомобиле стоит обычный галоген, который плохо освещает дорогу? Во-первых это небезопасно, а во-вторых это не красит ваш автомобиль. Приглашаем вас к нам, чтобы сделать красивую, а самое главное оптику, которая будет освещать темные дороги.
            </p>
            <p>
              Также, если у вас плохо освещают дорогу штатные линзы – мы поменяем и оставим прежний вид Ваших фар. Машина будет освещать вам путь и выглядеть также, как и раньше.
            </p>
          </div>
        </section>

        <section className="chip">
          <div className="media">
            <figure><div></div></figure>
          </div>

          <div className="text">
            <h2>
              Ремонт сколов
            </h2>
            <p>
              Каждый второй автомобилист обнаруживает скол на лобовом стекле ежегодно и оставляет это так, а ведь из скола может пойти трещина и вам будет необходимо менять все лобовое стекло. Но зачем все доводить до таких крайностей?
            </p>
            <p>
              Вы можете приехать к нам и мы заклеим вам скол с помощью новейших технологий - жидкого полимера. Во-первых ваш скол будет незаметен, а во-вторых вы не будете покупать новое лобовое стекло!
            </p>
          </div>
        </section>

        <section className="body">
          <div className="media">
            <figure><div></div></figure>
          </div>

          <div className="text">
            <h2>
              Пересвет салона
            </h2>
            <p>
              Всем нам надоедает со временем подсветка в нашем салоне и ее хочется разнообразить или же добавить что-то новое.
            </p>
            <p>
              К примеру подсветку ног во всем автомобиле или красный цвет приборной панели поменять на приятный белый цвет.
            </p>
          </div>
        </section>

        <section className="polish">
          <div className="media">
            <figure><div></div></figure>
          </div>

          <div className="text">
            <h2>
              Полировка фар
            </h2>
            <p>
              Иногда достаточно всего лишь сделать полировку фар, после чего они станут светить ярче, а их вид вас обязательно обрадует.
            </p>
            <p>
              Также мы наносим бронепленку, чтобы в следующий раз избежать полировки фар и просто менять пленку.
            </p>
          </div>
        </section>

        <section className="noise">
          <div className="media">
            <figure><div></div></figure>
            <video className="video" playsInline autoPlay muted loop>
              <source src={videoNoise} type="video/mp4" />
            </video>
          </div>

          <div className="text">
            <h2>
              Шумоизоляция
            </h2>
            <p>
              Даже в дорогих и престижных автомобилях плохая шумоизоляция, особенно в арках.
            </p>
            <p>
              Чтобы получать настоящее удовольствие от поездок и не слышать посторонние звуки из вне достаточно сделать шумоизоляцию.
            </p>
          </div>
        </section>


      </div>
    );
  }
}

export default ServicesPage;
