import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import data from '../data';

const ArticleHeader = (props) => {
  return (
    <article className="ArticleHeader">
      <Header />
      <SubHeader caption={ data[0].Caption } description={ data[0].Description } />
    </article>
  )
}

export default ArticleHeader;
