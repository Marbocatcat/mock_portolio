import React from 'react';

const ArticleFooter = (props) => {
  return (
      <footer className="ArticleFooter">
        <Form />
        <SocialLinks />



        <p className="copyright">copyright</p>
      </footer>
  )
};

const Form = (props) => {
  return (
    <form action="">
      <div className="text before">
        <h3 className="subscribe">Subscribe</h3>
        <p>Get notified when we publish new issues.</p>
      </div>
      <div className="form">
        <input type="email" placeholder="Your email" name="email"/>
        <button type="submit"></button>
      </div>
    </form>
  )
};

const SocialLinks = (props) => {
  return (
    <div className="SocialLinks">
      <a href="" className="twitter"></a>
      <a href="" className="github"></a>
      <a href="" className="facebook"></a>
    </div>
  )
};

export default ArticleFooter;
