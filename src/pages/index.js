import React from 'react';
import Link from 'gatsby-link';

import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';

import video from './video.mp4';

import Footer from '../components/Footer';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swiper: null
    }
  }

  componentDidMount() {
    this.state.swiper = new Swiper(this.swiper);
  }

  render() {
    return (
      <main className="page page_index">
        <div className="swiper-container" ref={(swiper) => { this.swiper = swiper; }}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <section>
                <h1>
                  Ремонт и тюнинг фар вашего автомобиля
                </h1>
                <p>
                  Работы для любой марки авто – премиум и эконом класса.
                </p>
                <p>
                  <span className="btn">Оставить заявку</span>
                </p>
              </section>
            </div>
            <div className="swiper-slide">
              <section>
                <h1>
                  Шумоизоляция вашего автомобиля
                </h1>
                <p>
                  Наши сотрудники имеют огромный опыт в сфере шумоизоляции и знают, как сделать вашу машину более комфортной.
                </p>
                <p>
                  <Link to="/services" className="btn">Посмотреть все услуги</Link>
                </p>
              </section>
            </div>
            <div className="swiper-slide">
              <section>
                <h1>
                  Оставьте заявку и получите скидку 5%
                </h1>
                <p>
                  Заполните форму, мы перезвоним вам и назначим время.
                </p>
                <p>
                  <span className="btn">Оставить заявку</span>
                </p>
              </section>
            </div>
          </div>
        </div>



        <video className="bgvid" playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

        <Footer />
      </main>
    );
  }
}


export default IndexPage;
