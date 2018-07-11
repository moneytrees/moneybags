import React, { Component } from 'react';
import tamagotchi from '../../../imgs/tamagotchi200x220.png';
/*import Education from 'components/HelpEducation/Education';
import Help from 'components/HelpEducation/Help';*/

class Helpeducation extends Component {
    render() {
        return (

            <div>
                <h1>Help</h1>
                <div>
                    <a href="#!">
                        <img className="tamagotchi" src={tamagotchi} alt="logo" />
                    </a>
                </div>

                {/*<Education/>
                
                
                <Help/>*/}
            </div>
        );
    }
}

export default Helpeducation ;