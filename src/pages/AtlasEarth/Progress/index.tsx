import { ReactElement } from 'react';
import { Typography, Grid } from '@mui/material';

const Progress = (): ReactElement => (
    <Grid container spacing={2}>
        <Grid item>
            <Typography variant='h2' component='h2'>AE Overall Progress (US)</Typography>
            <Typography>
                While I can only speak for the US since I've only played AE here so far, I believe the following
                is fairly accurate:
            </Typography>
            <ul>
                <li>
                    75% of players have earned everything using F2P methods: Ads, $1+ conversion to ABs,
                    Atlas Merchant Program (AMP), Minigames, basically anything other than buying AB packs
                    from the internal game shop or web app
                </li>
                <li>
                    22% of players have made a few microtransactions and/or are EC members ($5 - a few $100)
                </li>
                <li>
                    3% of players (myself included) have invested a ridiculous amount of money in this game.
                    So far, I believe all of us are based in the US. I can't speak for all of the major
                    whales on what they're hoping to accomplish, but for me: I believe in a future where
                    metaverse platforms help working class people finally have the freedom to live their
                    short lives however they please, without having to work themselves to exhaustion until
                    they're old (if they manage to make it to retirement age). I'll admit I'm a bit jealous
                    of AR's founders for conceptualizing this game before me, but nevertheless, I'm glad it
                    exists and I hope that it can stick around for a very long time. Obviously, this game in
                    its current state isn't going to allow anyone to quit working, but this is only the
                    beginning for the metaverses, so who knows how metaverse platforms will evolve in the
                    future? As AR finds ways to increase their revenue without having to depend so much on ads,
                    and they've already done a phenomenal job of working towards that with things like AMP, AA,
                    AS, and Minigame/Super Rent Boost (SRB) sponsors, they may be willing to raise the accrual
                    value of parcels over time.
                </li>
            </ul>
        </Grid>
    </Grid>
);

export default Progress;