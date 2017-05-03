import React from 'react';

const SiloCard = (props) => {
  return (
    <ul className="siloCard">
      <li className="left Card">
        <a href="">
          <div className="Content">
            <h2 className="CardHeader">Card Header</h2>
            <h4 className="CardSubHeader">SubHeader</h4>
            <p className="CardParagraph">Paragraph</p>
          </div>
        </a>
      </li>
      <li className="right Card">
        <a href="">
          <div className="Content">
            <h2 className="CardHeader">Card Header </h2>
            <h4 className="CardSubHeader">SubHeader</h4>
            <p className="CardParagraph">Paragraph</p>
          </div>
        </a>
      </li>
    </ul>


  )
};

export default SiloCard;
