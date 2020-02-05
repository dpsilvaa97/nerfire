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
import BaseInfo from './baseInfo/BaseInfo';

interface IProps {
    appLanguage: LangType;
}

export const InfoApp: React.FC<IProps> = (props) => {

    return (
        <div className="wrapper-infoApp">
            <div className="container-text-intro">
                <span>{props.appLanguage.appLanguage.about[1]}</span>
                <br></br>
                <span>{props.appLanguage.appLanguage.about[2]}</span>
            </div>
            <div className="container-divider-drone"></div>
            <div className="container-text-drone">
                <span>Drones</span>
            </div>
            <DroneInfo appLanguage={props.appLanguage} />

            <div className="container-divider-base"></div>
            <div className="container-text-base">
                <span>Bases</span>
            </div>
            <BaseInfo appLanguage={props.appLanguage} />

        </div>
    );

}


export default InfoApp;
