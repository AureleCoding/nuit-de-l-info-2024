import React from "react";
import '../styles/components/TextCredit.scss'
import {Link} from "react-router-dom";

function TextCredit1({Nom,Citation, Link}) {
    return (
        <div className={"TextCredit1"}>
            <h2 className={"Name"}> {Nom}</h2>
            <h3 className={"citation"}> {Citation}</h3>
            <h4 className={"link"}> <a href={Link}>LinkedIn</a></h4>
        </div>
    );
}


export default TextCredit1;