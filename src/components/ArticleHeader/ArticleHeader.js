import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';

const ArticleHeader = (props) => {
  return (
    <article className="ArticleHeader">
      <Header />
      <SubHeader />
    </article>
  )
}

export default ArticleHeader;
