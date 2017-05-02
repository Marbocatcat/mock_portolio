import React from 'react';

const SubHeader  = (props) => {
  return (
    <div className="SubHeader">
      <Caption caption={ props.caption }/>
      <Description description={ props.description }/>
    </div>
  )
};

const Caption = (props) => {
  return (
    <div className="Caption">
      <h1>{ props.caption }</h1>
    </div>
  )
}

const Description = (props) => {
  return (
    <p className="Description">
      { props.description }
    </p>
  )
};

export default SubHeader;
