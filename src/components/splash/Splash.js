import React from 'react';
import './Splash.css';
import RaisedButton from 'material-ui/RaisedButton';

const Splash = () => (
  <div>
    <div className="wrapper">
      <h1 className="title">Podcast Search</h1>
      <p className="paragraph">
        A simple web app for searching the iTunes podcast database
      </p>
      <RaisedButton className="button" label="Search" href="/search" />
    </div>
  </div>
);

export default Splash;
