import React from 'react';
import "./InfoApp.css"

import Time from '../../../assets/drone/time.png';
import Sensor from '../../../assets/drone/sensor.png';
import Frequency from '../../../assets/drone/frequency.png';
import Mark from '../../../assets/drone/mark.png';
import Camera from '../../../assets/drone/camera.png';
import Drone from '../../../assets/drone/prototype.png';
import { LangType } from '../../../services/languages/LangType';

interface IProps {
    appLanguage: LangType;
}

export const InfoApp: React.FC<IProps> = (props) => {

    return (
        <div className="wrapper-infoApp">
            <div className="container-infoApp">
                <div className="infoApp-object">
                    <div className="infoApp-object-img">
                        <img src={Time} alt="drone img"></img>
                    </div>
                    <div className="infoApp-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.drone.time}</span>
                    </div>
                </div>
                <div className="infoApp-object">
                    <div className="infoApp-object-img">
                        <img src={Sensor} alt="drone img"></img>
                    </div>
                    <div className="infoApp-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.drone.sensor}</span>
                    </div>
                </div>
                <div className="infoApp-object">
                    <div className="infoApp-object-img">
                        <img src={Frequency} alt="drone img"></img>
                    </div>
                    <div className="infoApp-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.drone.frequency}</span>
                    </div>
                </div>
                <div className="infoApp-object">
                    <div className="infoApp-object-img">
                        <img src={Mark} alt="drone img"></img>
                    </div>
                    <div className="infoApp-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.drone.mark}</span>
                    </div>
                </div>
                <div className="infoApp-object">
                    <div className="infoApp-object-img">
                        <img src={Camera} alt="drone img"></img>
                    </div>
                    <div className="infoApp-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.drone.camera}</span>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default InfoApp;
