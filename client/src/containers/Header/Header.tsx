import React from "react";
import "./header.css";

function Header() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <h1>TaskManager</h1>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Important Tasks <span className="emoji">{"\u203C"}</span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default Header;
