import React from 'react';
import Background from './background/Background';
import "./Home.css";
import { RouteComponentProps } from 'react-router';
import { LangType } from '../../services/languages/LangType';
import InfoApp from './info/InfoApp';


interface IProps extends RouteComponentProps<any> {
    appLanguage: LangType;
 }

export const Home: React.FC<IProps> = (props) => {

    return (
        <React.Fragment>
            <Background appLanguage={props.appLanguage}/>
            <InfoApp appLanguage={props.appLanguage}/>
        </React.Fragment>
    );
}


export default Home;
