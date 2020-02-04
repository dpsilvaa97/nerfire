import React from 'react';
import "./NoMatch.css"

interface IProps {

}

export const NoMatch: React.FC<IProps> = (props) => {

    return (
        <div className="wrapper-nomatch">
            <p>404 empreendedorismo</p>
        </div>
    );

}


export default NoMatch;
