import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import jsonp from 'jsonp';

class WorksPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: []
    }
  }

  componentDidMount() {
    this.fetchWorks();
  }

  fetchWorks() {
    jsonp('https://api.vk.com/method/photos.getAlbums?access_token=a37359c8a37359c8a37359c86ca316fc9baa373a37359c8f801856aff2618d97ece0683&owner_id=-21183461&need_covers=1&photo_sizes=1&v=5.73', null, (err, data) => {
      if(!err) {
        this.setState({
          works: data.response.items
        });
      }
    });
  }

  render() {
    let works = this.state.works.filter((work) => work.description.includes('#raybox.su'));
    if(works.length < 1) {
      works = this.state.works;
    }

    works = works.slice(0, 12);

    return (
      <div className="page page_works">
        <Helmet>
          <title>Наши работы</title>
          <meta name="description" content="Мы оформили уже более двухсот автомобилей по всей стране." />
        </Helmet>

        <h1>Наши работы</h1>
        <p>Мы оформили уже более двухсот автомобилей по всей стране.</p>
        <div className="works_list">
          {works.map((work, _) =>
            <div key={_} className="works_list_item">
              <a href={`https://vk.com/album${work.owner_id}_${work.id}`} target="_blank">
                <div className="img" style={{ backgroundImage: `url(${work.sizes[work.sizes.length - 1].src})` }}>
                </div>

                <div className="title">
                  {work.title}
                </div>
              </a>

            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WorksPage;
