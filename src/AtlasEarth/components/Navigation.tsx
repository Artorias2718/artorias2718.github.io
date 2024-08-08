/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navigation = (): ReactElement => {
    const styles = {
        container: { display: 'flex', gap: '1rem', alignItems: 'center' },
        link: { textDecoration: 'none', display: 'inline-block', padding: '0.5rem 1rem' },
    };

    return (
        <Box sx={styles.container}>
            <MuiLink component={RouterLink} style={styles.link} to='/atlasearth'>Home</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/atlasearth/progress'>Progress</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/atlasearth/parcels'>Parcels</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/atlasearth/advice'>Advice</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/atlasearth/faq'>FAQ</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/atlasearth/resources'>Resources</MuiLink>
        </Box>
    );
};

export default Navigation;