import React from 'react';
import Link from 'gatsby-link';

import Logo from '!svg-react-loader!./raybox_logo.svg';
import Burger from '!svg-react-loader!./burger.svg';

import classNames from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  toggleActive = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  componentDidMount() {
  }

  inActive =() => {
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <header className={classNames('header', { 'active': this.state.active })}>
        <div className="header_container">
          <div className="header_logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div className="header_phone">
            <a href="tel:+79103931456">+7 (910) 393-14-56</a>
          </div>

          <div className="header_menu">
            <ul>
              <li>
                <Link to="/services" activeClassName="active">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/works" activeClassName="active">
                  Работы
                </Link>
              </li>
              <li>
                <Link to="/contacts" activeClassName="active">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="header_burger" onClick={this.toggleActive}>
            <Burger />
          </div>
        </div>


        <div className="header_nav">
          <ul>
            <li>
              <Link to="/" activeClassName="active" exact onClick={this.inActive}>Главная</Link>
            </li>
            <li>
              <Link to="/services" activeClassName="active" onClick={this.inActive}>Услуги</Link>
            </li>
            <li>
              <Link to="/works" activeClassName="active" onClick={this.inActive}>Работы</Link>
            </li>
            <li>
              <Link to="/contacts" activeClassName="active" onClick={this.inActive}>Контакты</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
