import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = (props) => {
  return (
    <div>

      <div className="text-center"></div>
      <Progress multi>
        <Progress bar animated color="success" value="70"></Progress>
      </Progress>
    </div>
  );
};

export default ProgressBar;