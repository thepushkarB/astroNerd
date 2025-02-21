import React from "react";
import { useInfo } from "../context";

export default function Footer() {
    
    const {showSidebar, setShowSidebar, data, loading} = useInfo();

    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD by AstroNerd</h1>
                <h2>{data.title}</h2>
            </div>
            <button onClick={() => setShowSidebar(!showSidebar)}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}