import React from 'react';
import ArticleCard from '../ArticleBody/ArticleCard/ArticleCard';
import SiloCard from './ArticleCard/SiloCard';
import data from '../data';

const ArticleBody = (props) => {
  return (
    <article className="ArticleBody">
      <ul>
        <ArticleCard
          Header={ data[1].Header }
          SubHeader={ data[1].SubHeader }
          Paragraph={ data[1].Paragraph }
          Artwork={ data[1].artwork }
          />
        <ArticleCard
          Header={ data[2].Header }
          SubHeader={ data[2].SubHeader }
          Paragraph={ data[2].Paragraph }
          Artwork={ data[2].artwork}
          />
        <SiloCard />
      </ul>

    </article>
  )
}

export default ArticleBody;
