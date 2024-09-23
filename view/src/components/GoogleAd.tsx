import React, { useEffect } from 'react';

interface props {
    client: string;
    slot: string;
    format?: string;
    className?: string;
    style?: React.CSSProperties;
}

const GoogleAd: React.FC<props> = ({
        client,
        slot,
        format = 'auto',
        className = 'adsbygoogle',
        style = { display: 'block' },
    }) => {
    useEffect(() => {
        const loadAds = () => {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('Adsbygoogle push error:', e);
            }
        };

        // Ensure script tag is added only once
        if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            script.async = true;
            script.onload = loadAds;
            document.body.appendChild(script);
        } else {
            loadAds();
        }
    }, []);

    return (
        <ins
            className={className}
            style={style}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
        ></ins>
    );
};

export default GoogleAd;