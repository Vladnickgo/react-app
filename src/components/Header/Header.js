import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
    const [token, setToken] = useState("");
    return (
        <header>
            <div className="row">
                <div className="col-1">Admin UI</div>
                <div className="col-11">{props.name}</div>
            </div>
        </header>
    )
};
export default Header;