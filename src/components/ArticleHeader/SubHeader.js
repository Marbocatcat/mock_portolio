import React from 'react';

const SubHeader  = (props) => {
  return (
    <div className="SubHeader">
      <Caption />
      <Description />
    </div>
  )
};


const Caption = (props) => {
  return (
    <div className="Caption">
      <h1>Caption</h1>
    </div>
  )
}

const Description = (props) => {
  return (
    <p className="Description">
      Increment is dedicated to covering how teams build and operate software systems at scale, one issue at a time. In this, our inaugural issue, we focus on industry best practices around on-call and incident response
    </p>
  )
};

export default SubHeader;
