/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactElement, useState } from "react";
import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navigation = (): ReactElement => {
    const [activeLink, setActiveLink] = useState<number | null>(null);

    const styles = {
        container: css({
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
        }),
        link: (isActive: boolean) => css({
            background: isActive ? '#00f' : '#025',
            color: '#fff',
            fontWeight: isActive ? 'bold' : 'normal',
            pointerEvents: isActive ? 'none' : 'all',
            textDecoration: 'none',
            display: 'inline-block',
            padding: '0.5rem 1rem',
        }),
    };

    const updateActiveLink = (index: number) => {
        setActiveLink(index);
    };

    return (
        <Box sx={styles.container}>
            <MuiLink
                component={RouterLink}
                css={styles.link(activeLink === 0)}
                onClick={() => updateActiveLink(0)}
                to='/atlasearth'>
                Home
            </MuiLink>
            <MuiLink
                component={RouterLink}
                css={styles.link(activeLink === 1)}
                onClick={() => updateActiveLink(1)}
                to='/atlasearth/timeline'>
                Timeline
            </MuiLink>
            <MuiLink
                component={RouterLink}
                css={styles.link(activeLink === 2)}
                onClick={() => updateActiveLink(2)}
                to='/atlasearth/parcels'>
                Parcels
            </MuiLink>
            <MuiLink
                component={RouterLink}
                css={styles.link(activeLink === 3)}
                onClick={() => updateActiveLink(3)}
                to='/atlasearth/advice'>
                Advice
            </MuiLink>
            <MuiLink
                component={RouterLink}
                css={styles.link(activeLink === 4)}
                onClick={() => updateActiveLink(4)}
                to='/atlasearth/faq'>
                FAQ
            </MuiLink>
            <MuiLink
                component={RouterLink}
                css={styles.link(activeLink === 5)}
                onClick={() => updateActiveLink(5)}
                to='/atlasearth/resources'>
                Resources
            </MuiLink>
        </Box>
    );
};

export default Navigation;
