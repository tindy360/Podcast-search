import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <div>

    <CircularProgress style={{position:'absolute', left:'600px', top:'200px'}} size={60} thickness={7} />

  </div>
);

export default Loading;
