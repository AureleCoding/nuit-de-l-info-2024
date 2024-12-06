import {Outlet, Link} from "react-router-dom";
import Button from "./Button.jsx";
import Button2 from "./Button2.jsx";
import Button3 from "./Button3.jsx";
import Button4 from "./Button4.jsx";
import "../styles/components/layout.scss";
import React from "react";

const Layout = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to={"/home"} className={"home"}>
                        <Button text={"Home"}/>
                    </Link>
                </li>
                <li>
                    <Link to={"/credits"} className={"credits"}>
                        <Button text={"Crédits"}/>
                    </Link>
                </li>

            </ul>
        </nav>
        <Outlet/>
    </>)
};

export default Layout;