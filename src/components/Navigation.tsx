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
            <MuiLink component={RouterLink} style={styles.link} to='/'>Home</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/progress'>Progress</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/parcels'>Parcels</MuiLink>
            <MuiLink component={RouterLink} style={styles.link} to='/advice'>Advice</MuiLink>
        </Box>
    );
};

export default Navigation;