import React from "react";
import { useInfo } from "../context";

export default function Main() {
    const { data, loading } = useInfo();
    return (
        <div>
            {
                // if `data` is availble then fetch the img else load/fetch the `loading` icon
                data ? (
                    <div className="imgContainer">
                        <img src={data.hdurl}alt={data.title || "fetched-img"} className="bgImg" />
                    </div>
                ) : (
                    // loading icon
                    <div className="loadingState">
                        <i className="fa-solid fa-spinner"></i>
                    </div>
                )
            }
        </div>

        // <div className="imgContainer">
        //     {/* <img src="../public/mars-landscape.jpg" alt="" className="bgImg" /> */}
        //     {/* Files in the public directory are served at the root path.
        //     Instead of "/public/mars-landscape.jpg", use "/mars-landscape.jpg" */}
        //     <img src="/mars-landscape.jpg" alt="" className="bgImg" />
        // </div>
    )
}