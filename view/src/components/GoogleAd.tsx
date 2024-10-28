import React, { useEffect, useRef, forwardRef } from 'react';

// Creating a custom component for <ins> that forwards the ref correctly
const InsElement = forwardRef<HTMLModElement, React.HTMLProps<HTMLModElement>>((props, ref) => (
    <ins ref={ref} {...props} />
));

const GoogleAd = () => {
    const adRef = useRef<HTMLModElement>(null); // Using HTMLModElement for the <ins> tag

    useEffect(() => {
        if (adRef.current) {
            try {
                if (!adRef.current.hasChildNodes()) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            } catch (e) {
                console.error("Ad push error:", e);
            }
        }
    }, []);

    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <InsElement
                className="adsbygoogle"
                ref={adRef} // Using the InsElement to manage the <ins> ref
                style={{ display: 'block' }}
                data-ad-client='ca-pub-9162647553953507'
                data-ad-slot='4055899381'
                data-ad-format='auto'
                data-full-width-responsive='true'
            ></InsElement>
        </div>
    );
};

export default GoogleAd;
