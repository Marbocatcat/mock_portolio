import React from 'react';
import ArticleCard from '../ArticleBody/ArticleCard/ArticleCard';
import data from '../data.js';

export default class ArticleBody extends React.Component {
  render() {
    return (
      <article className="ArticleBody">
        <ul>
          <ArticleCard
            Header={ data[0].Header }
            SubHeader={ data[0].SubHeader }
            Paragraph={ data[0].Paragraph }
            Artwork={ data[0].artwork }
            />
          <ArticleCard
            Header={ data[1].Header }
            SubHeader={ data[1].SubHeader }
            Paragraph={ data[1].Paragraph }
            Artwork={ data[1].artwork}
            />
        </ul>
      </article>
    )
  }
};
