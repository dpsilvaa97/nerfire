import * as React from 'react'
import './Footer.css';
import { LangType } from '../../services/languages/LangType';


interface IProps {
    appLanguage: LangType;
 }


export const Footer: React.FC<IProps> = (props) => {

    return (
        <div className="wrapper-footer">
            <div className="container-footer">
                <div className="container-text">
                    <div className="footer-text" style={{fontFamily:'Tahoma'}}>{props.appLanguage.appLanguage.footer.message}</div>
                </div>
            </div>
        </div>
    );

}

export default Footer;
