import React from 'react';
import ArticleHeader from './ArticleHeader/ArticleHeader';
import ArticleBody from './ArticleBody/ArticleBody';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ArticleHeader />
        <ArticleBody />
      </div>
    )
  }
};
