import React from "react";
import '../styles/components/TextCredit.scss'

function TextCredit({Nom, Citation, Link}) {
    return (
        <div className={"TextCredit"}>
        <h2 className={"Name"}> {Nom}</h2>
        <h3 className={"citation"}> {Citation}</h3>
        <h4 className={"link"}><a href={Link}>LinkedIn</a></h4>
    </div>);
}


export default TextCredit;