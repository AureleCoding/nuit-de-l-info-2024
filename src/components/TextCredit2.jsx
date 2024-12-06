import React from "react";


import '../styles/components/TextCredit.scss'
import {Link} from "react-router-dom";

function TextCredit2({Nom,Citation, Link}) {
    return (
        <div className={"TextCredit2"}>
            <h2 className={"Name"}> {Nom}</h2>
            <h3 className={"citation"}> {Citation}</h3>
            <h4 className={"link"}> <a href={Link}>LinkedIn</a></h4>
        </div>
    );
}


export default TextCredit2;