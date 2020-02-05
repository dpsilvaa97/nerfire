import React from 'react';
import "./BaseInfo.css"

import Battery from '../../../../assets/base/battery.png';
import Communicate from '../../../../assets/base/communicate.png';
import Mark from '../../../../assets/base/mark.png';
import Base from '../../../../assets/base/prototype.png';
import { LangType } from '../../../../services/languages/LangType';

interface IProps {
    appLanguage: LangType;
}

export const BaseInfo: React.FC<IProps> = (props) => {

    return (
        <div className="wrapper-infoApp-base">
            <div className="container-infoApp-base-list">
                <div className="infoApp-base-object">
                    <div className="infoApp-base-object-img">
                        <img src={Battery} alt="base img"></img>
                    </div>
                    <div className="infoApp-base-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.base.battery}</span>
                    </div>
                </div>
                <div className="infoApp-base-object">
                    <div className="infoApp-base-object-img">
                        <img src={Communicate} alt="base img"></img>
                    </div>
                    <div className="infoApp-base-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.base.communicate}</span>
                    </div>
                </div>
                <div className="infoApp-base-object">
                    <div className="infoApp-base-object-img">
                        <img src={Mark} alt="base img"></img>
                    </div>
                    <div className="infoApp-base-object-label">
                        <span>{props.appLanguage.appLanguage.infoApp.base.mark}</span>
                    </div>
                </div>
            </div>
            <div className="container-infoApp-base-display">
                <div className="infoApp-base-display-info">
                    <ul className="infoApp-base-display-info-list">
                        <li>Uso de UHF para comunicação entre drones;</li><br></br>
                        <li>Voos de drones até 120 metro, de acordo com a ANAC (Autoridade Nacional de Aviação Portuguesa);</li><br></br>
                        <li>Patrulhas limitadas à autonomia do drone, durante mau tempo e noite.</li><br></br>
                    </ul>
                </div>
                <div className="infoApp-base-display-prototype">
                    <img src={Base} alt="base img"></img>
                </div>

            </div>
        </div>
    );

}


export default BaseInfo;
