import React from 'react';

import noteBookKey from '../../../assets/noteBookKey.jpeg';

import './About.scss';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <h1 className="textColor marginDelete marginTop">writersResort</h1>
        <div className="text-center">
        <img id="noteBookKey" src={noteBookKey} alt="Notebook with key"/>
        <div className="d-flex justify-content-center">
        <h3 className="aboutTextBackground">This is writersResort, a
          free platform for writers at any skill level to post work
          they'd like feedback on. There are no fees
          to use the service and we hope you find it useful.
          Anything submitted to this forum remains the sole
          property of its owner and we encourage you to
          provide feedback to others. Together, we can
          build a community of passionate writers.</h3>
          </div>
      </div>
      </div>
    );
  }
}

export default About;
