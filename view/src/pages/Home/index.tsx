/** @jsxImportSource @emotion/react */

import { ReactElement } from 'react';
import { css } from '@emotion/react';
import {Box, Grid, Typography} from "@mui/material";
import parcelAccrualImg from '../../assets/Img/Home/ParcelAccrual.jpg';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { decode } from 'html-entities';

import data from '../../assets/Data/Home/Data.json';
import ImageComponent from "../../components/Image.tsx";

const Home = (): ReactElement => {

    const styles= {
        alignCenter: css({ textAlign: 'center' }),
        inline: css({ display: 'inline' }),
        image: { width: '16rem' },
        white: css({ color: '#fff' }),
    };

    const parcelColumns: GridColDef[] = [
        {
            field: 'parcelType',
            headerName: 'Parcel Type',
            width: 150,
            renderCell: ({ row: item }) => {
                return <span css={styles.white}>{item['parcelType']}</span>;
            }
        },
        {
            field: 'parcelRate',
            headerName: 'Parcel Rate',
            width: 150,
            renderCell: ({ row: item }) => {
                const parcelRate = item['parcelRate'];
                const amount = parcelRate < 1
                    ? <span>{`${decode(`$${(parcelRate * 1000000000).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}&times;10`)}`}<sup>-9</sup></span>
                    : decode(`$${parcelRate.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        }
    ];

    const rentColumns: GridColDef[] = [
        {
            field: 'parcelCount',
            headerName: 'Parcel Count',
            width: 150,
            renderCell: ({ row: item }) => {
                const row = item['row'];
                return <span css={styles.white}>{row[1] > 0 ? decode(`${row[0].toLocaleString()}&ndash;${row[1].toLocaleString()}`) : decode(row[0].toLocaleString())}</span>;
            }
        },
        {
            field: 'boostAvailable',
            headerName: 'Boost Available',
            width: 150,
            renderCell: ({ row: item }) => {
                const row = item['row'];
                return <span css={styles.white}>{decode(`${row[2]}&times;`)}</span>;
            }
        },
        {
            field: 'monthlyRentNoAds',
            headerName: 'Rent/mo. (No Ads)',
            width: 150,
            renderCell: ({ row: item }) => {
                const row = item['row'];
                const amount = row[3] < 1
                    ? <span>{`${decode(`$${(Math.round(row[3] * 10000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}&times;10`)}`}<sup>-1</sup></span>
                    : decode(`$${row[3].toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        },
        {
            field: 'monthlyRentAds',
            headerName: 'Rent/mo. (Ads)',
            width: 150,
            renderCell: ({ row: item }) => {
                const row = item['row'];
                const amount = row[4] < 1
                    ? <span>{`${decode(`$${(Math.round(row[4] * 10000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}&times;10`)}`}<sup>-1</sup></span>
                    : decode(`$${row[4].toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        },
        {
            field: 'annualRentAds',
            headerName: 'Rent/yr. (Ads)',
            width: 150,
            renderCell: ({ row: item }) => {
                const row = item['row'];
                const amount = row[5] < 1
                    ? <span>{`${decode(`$${(Math.round(row[5] * 10000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}&times;10`)}`}<sup>-1</sup></span>
                    : decode(`$${row[5].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        },
        {
            field: 'annualRentSRB',
            headerName: 'Rent/yr. (SRB)',
            width: 150,
            renderCell: ({ row: item }) => {
                const row = item['row'];
                const amount = row[6] < 1
                    ? <span>{`${decode(`$${(Math.round(row[6] * 10000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}&times;10`)}`}<sup>-1</sup></span>
                    : decode(`$${row[6].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        }
    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={10}>
                    <Typography variant='h1' component='h1'>Atlas Earth Guide</Typography>
                    <Typography>
                        Welcome to Atlas Earth, it's Artorias2718! As both a well-known whale and veteran Atlas Earth
                        player, I thought I'd share some guidance for those of you who are relatively new or just
                        wondering how to progress faster.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h2' component='h2'>What is Atlas Earth?</Typography>
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
                <Grid item>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>How much money do parcels give
                        you?</Typography>
                </Grid>
                <Grid item lg={6} css={styles.alignCenter}>
                    <Grid item>
                        {parcelAccrualImg &&
                            <ImageComponent src={parcelAccrualImg as string} alt='Parcel Accrual Table' style={styles.image}  />
                        }
                    </Grid>
                </Grid>
                <Grid item lg={6}>
                    <br/>
                    <br/>
                    <br/>
                    <Box>
                        <DataGrid columns={parcelColumns} rows={data['parcelTypes']} hideFooter={true}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography>
                        These amounts are in USD, and it's how much you earn every second of the day per parcel. Now, of
                        course, AR is first and foremost a business, so they have to ensure that they're making way more
                        money than us in order to survive. Sadly, this has resulted in many people who find out about
                        this game calling it a scam. While it may seem that way at first glance, you can try it
                        risk-free by playing F2P, play it until you accrue at lest $5, then cash-out and see for
                        yourself.
                    </Typography>
                    <br/>
                    <Typography>
                        Due to differences in ad revenue and international conversion rates, AE currently uses three
                        different tier sets
                        for the US, Mexico, and every other country that has finally joined the game. In order to stay
                        profitable, AR has to reduce the boost multiplier as players buy more parcels:
                    </Typography>
                    <br/>
                    <br/>
                    {
                        data &&
                        (
                            <>
                                <Typography variant='h2' component='h2'>US</Typography>
                                <Box>
                                    <DataGrid
                                        columns={rentColumns}
                                        rows={data['rentTables']['usa'].map((row) => row)}
                                        hideFooter={true}/>
                                </Box>
                            </>
                        )
                    }
                    <br/>
                    {
                        data &&
                        (
                            <>
                                <Typography variant='h2' component='h2'>Mexico</Typography>
                                <Box>
                                    <DataGrid columns={rentColumns}
                                              rows={data['rentTables']['mex'].map((row) => row)}
                                              hideFooter={true}/>
                                </Box>
                            </>
                        )
                    }
                    <br/>
                    {
                        data &&
                        (
                            <>
                                <Typography variant='h2' component='h2'>International</Typography>
                                <Box>
                                    <DataGrid columns={rentColumns}
                                              rows={data['rentTables']['intl'].map((row) => row)}
                                              hideFooter={true}/>
                                </Box>
                            </>
                        )
                    }
                    <br/>
                    <Typography>
                        Each line tells you how many parcels you can buy before your boost multiplier drops. In
                        the <strong>US</strong>, for example, <strong>150 parcels</strong> is the most you can buy if
                        you'd like to stay
                        at <strong>30x</strong>; as soon as you buy your <strong>151st parcel</strong>, you're down to
                        a <strong>20x boost</strong> multiplier. A common strategy among players is to do whatever it
                        takes to buy the maximum amount of parcels for a given line (tier), then wait until they have
                        enough ABs to jump to the next highest tier. For example,
                        many US players will work their way up to 150 parcels and stay there until they have
                        purchased/earned 7,000ABs since they are 70 parcels away from 220 parcels.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h2' component='h2'>My Advice</Typography>
                    <Typography>
                        First off, I don't advise you do what I did because paying off debt kind of sucks. Instead, here's a good way to go about this:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='h4' component='h4' css={styles.inline}>Ignore Tiers:</Typography>
                            <Box>
                                <Typography>
                                    The reason most players stick to them is because they're worried about a sudden drop in rent
                                    accrual whenever their boost multiplier is reduced. However, whether you're still
                                    at 30/20x boost or you've made it to 2x, the rent accrual is abysmal; so even though you would losbit of money for a while between tiers, I personally don't see a reason to worry about it.
                                </Typography>
                            </Box>
                        </li>
                        <li>
                            <Typography variant='h4' component='h4' css={styles.inline}>Get your first five badges
                                ASAP:</Typography>
                            <Box>
                                <Typography>
                                    This will cost a total of 1000ABs, but the reason I advise you to
                                    focus on this from the get-go is in case you'd like to try the Explorers Club (EC)
                                    subscription. Even when compared to the other AB pack deals from the <a
                                    href='https://app.atlasearth.com'>Web App</a>, EC is the best deal they currently offer.
                                    With 5 badges, For $50/month, you can get a minimum of 91ABs from your Daily Login Bonus
                                    instead of 1AB, and of course Bonus Days are even better with the Explorers Club. 1
                                    unclaimed parcel costs 100ABs, so in theory, you could get at least 1 free parcel/day
                                    after watching 5 2 free AB ads (or 9 1 free AB ads for international players); and of
                                    course the 5 daily diamond wheel spins could shorten this even more if you're lucky. If
                                    your main goal so far is one parcel/day, then once you are eligible for EC, don't
                                    convert any of your accrued rent and just watch a few ads throughout the day on top of
                                    your Daily Login Bonus and buy another free parcel as soon as you can. I wish this would
                                    have been available when I first started playing!
                                </Typography>
                            </Box>
                        </li>
                        <li>
                            <Typography variant='h4' component='h4' css={styles.inline}>Get badges as you find
                                them: </Typography>
                            <Box>
                                <Typography>
                                    Most players wait until they get 150 parcels, then they start focusing on badges until
                                    they max out their passport (lvl5 in the US, lvl6 elsewhere). Once they obtain their
                                    lvl5 passport, then they go back to saving up ABs until they have enough to buy their
                                    way to the next tier. The problem I see with this is that it's more tedious and time-consuming tha should be. If you don't travel often like me, it's best to buy badges on the rare occasion you tr and come across them, especially if you're visiting a location for the first time or a location rarely go to that's far from home. In short, focus on parcels when you're relatively close to home, and badges as you come across them.
                                </Typography>
                            </Box>
                        </li>
                        <li>
                            <Typography variant='h4' component='h4' css={styles.inline}>Watch ads throughout the day:</Typography>
                            <Box>
                                <Typography>
                                    This is only important if you're heavily focused on maximizing your income: watching ads sucks, bu really is important if you want to help speed up your progress (even I watch ads throughout the and I'm definitely not F2P). Now that Atlas Arcade (AA) and Atlas Surveys (AS) exist, you don't reaneed to worry about the 2 free AB ads as much anymore. However, if you're not really worried about tand just want to get as many parcels as possible, then just stick to things like AA, AS, and minigames.
                                </Typography>
                            </Box>
                        </li>
                        <li>
                            <Typography variant='h4' component='h4' css={styles.inline}>F2P strategy:</Typography>
                            <ul>
                                <li>
                                    <Typography variant='h5' component='h5' css={styles.inline}>Watch Ads:</Typography>
                                    <Box>
                                        <Typography>
                                            At a minimum, I'd suggest something like maxing out your ad boost shortly after you wakeand sometime before bed.
                                        </Typography>
                                    </Box>
                                </li>
                                <li>
                                    <Typography variant='h5' component='h5' css={styles.inline}>Wait until you get $6+:</Typography>
                                    <Box>
                                        This way, you can convert $1+ beyond $5 to ABs and cash out the rest. Alternatively, wait unyou earn a minimum of 75ABs and then you only need to convert $1 to buy another parcel
                                    </Box>
                                </li>
                                <li>
                                    <Typography variant='h5' component='h5' css={styles.inline}>Patience:</Typography>
                                    <Box>
                                        This is going to really suck in the beginning, but if you're willing to do it, just remember:  all profit!
                                    </Box>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Typography variant='h4' component='h4' css={styles.inline}>P2P strategy:</Typography>
                            <ul>
                                <li>
                                    <Typography variant='h5' component='h5' css={styles.inline}>Subscribe to EC:</Typography>
                                    <Box>
                                        <Typography>
                                            If you do nothing else, and you can afford it, subscribe to EC ASAP
                                        </Typography>
                                    </Box>
                                </li>
                                <li>
                                    <Typography variant='h5' component='h5' css={styles.inline}>Spend a bit extra periodically:</Typography>
                                    <Box>
                                        <Typography>
                                            Let's say you can afford $5/week, $20/month, or $100+/month: whatever you feel comfortawith, there's no harm in buying AB packs once in a while. While you won't break even for some t it will help your accrual rate grow faster.
                                            </Typography>
                                        </Box>
                                    </li>
                                    <li>
                                        <Typography variant='h5' component='h5' css={styles.inline}>Patience:</Typography>
                                        <Box>
                                            <Typography>
                                                Even if you are P2P, it's still going to be a tedious process to earn your first $100, $500, and even $1,000 from this game. I myself currently earn about $5.36/day from this, but SRBs are wonderful and, in my case, have made my whale spending worth it!
                                            </Typography>
                                        </Box>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;