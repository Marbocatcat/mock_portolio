import React from 'react';

const ArticleCard = (props) => {
  return (
    <li className="CardList">
      <a href="">
        <div className="inner">
          <div className="Content">
            <CardHeader />
            <CardSubHeader />
            <CardParagraph />
          </div>
          <div className="ArtWork"></div>
        </div>
      </a>
    </li>
  )
};

const CardHeader = (props) => {
  return (
    <h2 className="CardHeader">What happens in new Technology?</h2>
  )
};

const CardSubHeader = (props) => {
  return (
    <h4 className="CardSubHeader">A SURVEY OF INCIDENT RESPONSE ACROSS THE TECH INDUSTRY</h4>
  )
};

const CardParagraph = (props) => {
  return (
    <p className="CardParagraph">To discover the state of incident response across the tech industry, Increment surveyed over thirty industry leaders (including Amazon, Dropbox, Facebook, Google, and Netflix) about their incident response processes.</p>
  )
};

export default ArticleCard;
