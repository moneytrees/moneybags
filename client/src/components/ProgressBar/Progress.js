import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = (props) => {
  return (
    <div>

      <div className="text-center"></div>
      <Progress multi>
        <Progress bar striped value="15"></Progress>
        <Progress bar animated color="success" value="30"></Progress>
        <Progress bar color="info" value="25"></Progress>
      </Progress>
    </div>
  );
};

export default ProgressBar;