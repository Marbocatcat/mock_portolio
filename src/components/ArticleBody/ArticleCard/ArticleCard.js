import React from 'react';

const ArticleCard = (props) => {
  return (
    <li className="CardList">
      <a href="">
        <div className="inner">
          <div className="Content">
            <CardHeader Header={ props.Header }/>
            <CardSubHeader SubHeader={ props.SubHeader } />
            <CardParagraph Paragraph={ props.Paragraph }/>
          </div>
          <ArtWork Artwork={ props.Artwork } />
        </div>
      </a>
    </li>
  )
};

const ArtWork = (props) => {
  return (
    <div className={ props.Artwork }></div>
  )
};

const CardHeader = (props) => {
  return (
    <h2 className="CardHeader">{ props.Header }</h2>
  )
};

const CardSubHeader = (props) => {
  return (
    <h4 className="CardSubHeader">{ props.SubHeader }</h4>
  )
};

const CardParagraph = (props) => {
  return (
    <p className="CardParagraph">{ props.Paragraph }</p>
  )
};

export default ArticleCard;
