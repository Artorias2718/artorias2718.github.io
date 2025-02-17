import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GoogleAd = () => {
    const adRef = useRef<HTMLDivElement>(null); // 🔄 Changed to HTMLDivElement
    const location = useLocation(); // Detects route changes

    useEffect(() => {
        if (adRef.current) {
            try {
                // 🛑 Clear old ads before inserting a new one
                adRef.current.innerHTML = "";

                // Create a new <ins> element dynamically
                const newAd = document.createElement("ins");
                newAd.className = "adsbygoogle";
                newAd.style.display = "block";
                newAd.setAttribute("data-ad-client", "ca-pub-9162647553953507");
                newAd.setAttribute("data-ad-slot", "4055899381");
                newAd.setAttribute("data-ad-format", "auto");
                newAd.setAttribute("data-full-width-responsive", "true");

                // Append the new ad inside the wrapper div
                adRef.current.appendChild(newAd);

                // Push a new ad request
                if (window.adsbygoogle) {
                    window.adsbygoogle.push({});
                }
            } catch (e) {
                console.error("Ad push error:", e);
            }
        }
    }, [location.pathname]); // 🔄 Runs whenever the route changes

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <div ref={adRef}></div> {/* 🔄 Changed from <ins> to <div> */}
        </div>
    );
};

export default GoogleAd;
