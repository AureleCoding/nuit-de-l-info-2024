import React from 'react';
import Button from "../components/Button.jsx";
import BubbleButton from "../components/BubbleButton.jsx";
import BubbleButtonR from "../components/BubbleButtonR.jsx";
import Experience from "../components/Experience.jsx";
import TextWithButton from "../components/TextWithButton.jsx";
import Floor from "../components/floor.jsx";
import DeepLine from "../components/DeepLine.jsx";
import TextWithButtonR from "../components/TextWithButonR.jsx";
import {Outlet, Link} from "react-router-dom";
import Button2 from "../components/Button2.jsx";
import Button3 from "../components/Button3.jsx";
import Button4 from "../components/Button4.jsx";
import Nav_home from "../components/nav_home.jsx";
import Fish2 from "../components/Fish2.jsx";
import Title from "../components/Titre.jsx";

function Home(props) {
    return (<>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                position: "absolute",
                top: "0",
                left: "0",
                fontSize: "2vw",
            }}>
                <h1 className="title">Et si l'océan était humain ?</h1>
            </div>

            <div className={"threed"}>
                <Experience/>
            </div>


            <Nav_home/>


            <div className={"content"}>
                <div className={"left"}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButton path={"src/assets/Image/Sommaire/body_respiration.png"} id={"respiration"}/>
                        <TextWithButton
                            text={"L’océan et le corps humain partagent une fascinante dynamique rythmique, où les mouvements des vagues évoquent les cycles respiratoires.\n"}></TextWithButton>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButton path={"src/assets/Image/Sommaire/microbiote2.png"} id={"vie"}/>
                        <TextWithButton
                            text={"La vie dans les océans et le microbiote humain partagent une interdépendance essentielle. Les micro-organismes marins, piliers des écosystèmes, soutiennent les cycles vitaux, tout comme le microbiote régule la santé humaine.\n"}></TextWithButton>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButton path={"src/assets/Image/Sommaire/blood.png"} id={"courant"}/>
                        <TextWithButton
                            text={"Les courants marins et le système sanguin humain partagent un rôle essentiel de circulation. Les courants transportent nutriments et chaleur, régulant la vie océanique.\n"}></TextWithButton>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButton path={"src/assets/Image/Sommaire/estomax.png"} id={"pollution"}/>
                        <TextWithButton
                            text={"La pollution marine et les indigestions du système digestif humain illustrent des déséquilibres perturbant des écosystèmes complexes. Dans l'océan, les déchets perturbent les chaînes alimentaires et l’équilibre écologique.\n" +
                                "\n"}></TextWithButton>
                    </div>


                </div>
                {/*<tittle/>*/}
                <div className={"right"}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButtonR path={"src/assets/Image/Sommaire/wave.png"}/>
                        <TextWithButtonR
                            text={"L’inspiration, qui augmente le volume pulmonaire, et l’expiration, qui le réduit, reflètent le flux et reflux incessants des marées."}></TextWithButtonR>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButtonR path={"src/assets/Image/Sommaire/microbiote.png"}/>
                        <TextWithButtonR
                            text={"Ces écosystèmes invisibles, diversifiés et complexes sont nécessaires au maintien de l'équilibre écologique des milieux naturels, mais aussi à la bonne santé du corps humain.\n"}></TextWithButtonR>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButtonR path={"src/assets/Image/Sommaire/flux.png"}/>
                        <TextWithButtonR
                            text={"Tout comme le flux marin, le sang ne doit jamais s'arrêter, sous peine de provoquer la mort. De plus, avec le réchauffement climatique, les courants marins sont modifiés, ce qui peut avoir des conséquences catastrophiques.\n"}></TextWithButtonR>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <BubbleButtonR path={"src/assets/Image/Sommaire/garbages.png"}/>
                        <TextWithButtonR
                            text={"Il ne faut pas oublier que, tout comme le corps humain, l'océan ne peut pas digérer les microplastiques ni toute autre forme de pollution. Or, un déchet plastique jeté dans l'océan aujourd'hui met jusqu'à 500 ans à se décomposer! \n Ne jetez pas vos déchets dans l'océan! \n"}></TextWithButtonR>
                    </div>


                </div>

            </div>
            <DeepLine/>
            <Fish2/>


        </>
    );
}

export default Home;