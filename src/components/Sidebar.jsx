import React from "react";
import { useInfo } from "../context";

export default function Sidebar() {

    const {showSidebar, setShowSidebar, data, loading} = useInfo();

    return (
        <div className="sidebar">
            <div className="bgOverlay" onClick={() => setShowSidebar(!showSidebar)}></div>
            <div className="sidebarContents">
                {/* img name */}
                <h2>{data.title}</h2>

                {/* img info */}
                <div className="descriptionContainer">
                    <p className="descriptionTitle">Description:</p>
                    <p>{data.explanation}</p>
                </div>

                <button onClick={() => setShowSidebar(!showSidebar)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}