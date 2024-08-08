/** @jsxImportSOurce @emotion/react */

import { ReactElement } from 'react';
import { Grid, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import data from '../../assets/Data/Resources/Data.ts';

const Resources = (): ReactElement => {

    const styles = {
        container: { display: 'flex', gap: '1rem', alignItems: 'center' },
        link: { textDecoration: 'none', display: 'inline-block', padding: '0.5rem 0.25rem' },
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant='h2' component='h2'>Resources</Typography>
                <ul>
                    { data && data.map((item, id) => {
                        return (
                            <li key={id}>
                                <MuiLink component={RouterLink} style={styles.link} to={item.href} target='__blank'>{item.label}</MuiLink>: {item.desc}
                            </li>
                        );
                    })}
                </ul>
            </Grid>
        </Grid>
    );
};

export default Resources;