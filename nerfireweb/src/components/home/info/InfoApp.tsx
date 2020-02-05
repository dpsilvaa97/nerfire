import React from 'react';
import "./InfoApp.css"

import Time from '../../../assets/drone/time.png';
import Sensor from '../../../assets/drone/sensor.png';
import Frequency from '../../../assets/drone/frequency.png';
import Mark from '../../../assets/drone/mark.png';
import Camera from '../../../assets/drone/camera.png';
import Drone from '../../../assets/drone/prototype.png';
import { LangType } from '../../../services/languages/LangType';
import DroneInfo from './droneInfo/DroneInfo';

interface IProps {
    appLanguage: LangType;
}

export const InfoApp: React.FC<IProps> = (props) => {

    return (
        <div className="wrapper-infoApp">
            <DroneInfo appLanguage={props.appLanguage} />
        </div>
    );

}


export default InfoApp;
