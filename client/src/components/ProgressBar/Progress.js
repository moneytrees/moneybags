import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = (props) => {
  return (
    <div>

      <div className="text-center">Stripes and Animations</div>
      <Progress multi>
        <Progress bar striped value="15">Stripes</Progress>
        <Progress bar animated color="success" value="30">Animated Stripes</Progress>
        <Progress bar color="info" value="25">Plain</Progress>
      </Progress>
    </div>
  );
};

export default ProgressBar;