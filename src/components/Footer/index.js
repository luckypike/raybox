import React from 'react';
import Link from 'gatsby-link';

import Inst from '!svg-react-loader!./instagram-logo.svg';
import Vk from '!svg-react-loader!./vk-logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_social">
            <a href="https://vk.com/rbgnn">
              <Vk />
            </a>
            <a href="https://instagram.com/rbgnn">
              <Inst />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
