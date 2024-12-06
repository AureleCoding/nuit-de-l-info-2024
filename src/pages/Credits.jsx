import React from 'react';
import FaceImage from "../components/FaceImage.jsx";
import FaceImage2 from "../components/FaceImage2.jsx";
import FaceImage3 from "../components/FaceImage3.jsx";
import BubbleButton from "../components/BubbleButton.jsx";
import TextWithButton from "../components/TextWithButton.jsx";
import "../styles/pages/credits.scss"
import TextCredit from "../components/TextCrédit.jsx";
import Capchat from "./Capchat.jsx";
import TextCredit1 from "../components/TextCredit1.jsx";
import TextCredit2 from "../components/TextCredit2.jsx";

function Credits(props) {

    const personnes = [{
        nom: "Aurèle Joblet",
        citation: "Je sais pas...",
        link: "https://www.linkedin.com/in/aurelejoblet/?originalSubdomain=fr"
    },
        {
        nom: "Maxence Gautier Grall",
        citation: "C'est la merde non ?",
        link: "https://www.linkedin.com/in/max-g-g-a32570340//"
    },
        {nom: "Timéo",
        citation: "Peut être, ou peut être pas...",
        link: "https://www.linkedin.com/in/timéo-franville-aa0507301/"}];

    return (<div className={"Credits"}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20vh"}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20vw",
                position: "relative",
                height: "300px",
            }}>
                <div className={"FaceImage"}></div>
                <TextCredit Nom={personnes[0].nom} Citation={personnes[0].citation} Link={personnes[0].link}/>
            </div>


            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                //alignSelf: "flex-end",
                gap: "20vw",
                height: "300px",
            }}>
                <TextCredit1 Nom={personnes[1].nom} Citation={personnes[1].citation} Link={personnes[1].link}/>
                <div className={"FaceImage2"}/>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20vw",
                height: "300px"
            }}>
                <div className={"FaceImage3"}/>
                <TextCredit2 Nom={personnes[2].nom} Citation={personnes[2].citation} Link={personnes[2].link}/>
            </div>

            <div>
                <h1>LES PETITS TRAINS THE COME BACK</h1>
            </div>

        </div>
    </div>);
}

export default Credits;