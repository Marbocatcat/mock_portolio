import React from 'react';
import ArticleCard from '../ArticleBody/ArticleCard/ArticleCard';

export default class ArticleBody extends React.Component {
  render() {
    return (
      <article className="ArticleBody">
        <ul>
          <ArticleCard />
        </ul>
      </article>
    )
  }
};
