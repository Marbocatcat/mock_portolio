import React from 'react';
import ArticleHeader from './ArticleHeader/ArticleHeader';
import ArticleBody from './ArticleBody/ArticleBody';
import ArticleFooter from './ArticleFooter/ArticleFooter';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ArticleHeader />
        <ArticleBody />
        <ArticleFooter />
      </div>
    )
  }
};
