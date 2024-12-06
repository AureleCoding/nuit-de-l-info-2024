import React from 'react';
import "../styles/components/nav_home.scss"
import Button from "./Button.jsx";
import Button2 from "./Button2.jsx";
import Button3 from "./Button3.jsx";
import Button4 from "./Button4.jsx";

function NavHome(props) {
    return (
            <navHome style={{position: "fixed"}}  className={"NavHome"}>
                <ul>
                    <li>
                        <a href={"#respiration"}>
                            <Button text={"La respiration"}/>
                        </a>
                    </li>
                    <li>
                        <a href={"#vie"}>
                            <Button2 text={"La vie"}/>
                        </a>
                    </li>
                    <li>
                        <a href={"#courant"}>
                            <Button3 text={"Les courants"}/>
                        </a>
                    </li>
                    <li>
                        <a href={"#pollution"}>
                            <Button4 text={"La pollution"}/>
                        </a>
                    </li>

                </ul>
            </navHome>
    );
}

export default NavHome;