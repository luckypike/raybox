import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class WorksPage extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    const works = this.props.data.allWorksJson.edges;

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
              <a href={work.node.url} target="_blank">
                <div className="img">
                  <img src={work.node.img} />
                </div>

                <div className="title">
                  {work.node.title}
                </div>
              </a>

            </div>
          )}
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query WorksQuery {
    allWorksJson {
      edges {
        node {
          url
          title
          img
        }
      }
    }
  }
`;

export default WorksPage;
