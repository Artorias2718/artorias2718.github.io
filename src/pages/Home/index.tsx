import { ReactElement } from 'react';
import { Typography, Grid } from '@mui/material';

const Home = (): ReactElement => (
    <Grid container spacing={2}>
        <Grid item lg={10}>
            <Typography variant="h1" component="h1">Atlas Earth Guide</Typography>
            <Typography>
                Welcome to Atlas Earth, it's Artorias2718! As both a well-known whale and veteran Atlas Earth player, I thought I'd share some guidance for those of you who are relatively new or just wondering how to progress faster
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h2" component="h2">What is Atlas Earth?</Typography>
            <Typography>
                <a href='https://www.atlasearth.com' target='_blank'>Atlas Earth (AE)</a> is a mobile game
                developed by <a href='https://www.atlasreality.com/' target='_blank'>Atlas Reality (AR)</a>. The
                basic idea behind it is: as you travel around the world, you can buy unclaimed parcels of land
                or parcels that the owner haslisted for sale using Atlas Bucks (ABs) that together earn you a
                very small amount of money every second of the day. Unclaimed parcels cost <strong>100
                ABs</strong>, while owned parcels start at <strong>150 ABs</strong>. When someone buys a parcel
                from you, AE takes a 20% service fee, so at a minimum, you will earn 120 ABs from any parcels
                you sell.
            </Typography>
        </Grid>
    </Grid>
);

export default Home;