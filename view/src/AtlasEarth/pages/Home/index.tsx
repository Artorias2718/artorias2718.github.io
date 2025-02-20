import { Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { IData } from "../../Types.ts";
import parse from "html-react-parser";
import useGetAtlasEarth from '../../api/queryHooks/useGetAtlasEarth';

const Home = (): ReactElement => {
    const { data: home } = useGetAtlasEarth(2);
    const data = home && home.data() && home.data().data;

    const section1: IData = data && data && data.section1;
    const section2: IData = data && data && data.section2;
    const referralBaseUrl = 'https://r.atlasearth.com';
    const referralLink = data && data.referralCode && `If you haven't already, get started <a href='${referralBaseUrl}/${data.referralCode}'>here</a> for free.`;

    return section1 && section2 && (
        <Grid container spacing={2}>
            <Grid item lg={10}>
                <Typography variant='h1' component='h1'>{section1.label}</Typography>
                <Typography>
                    {parse(section1.description)}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h2" component="h2">{section2.label}</Typography>
                <Typography>
                    {parse(section2.description.replaceAll('{{REFERRAL_LINK}}', referralLink))}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Home;