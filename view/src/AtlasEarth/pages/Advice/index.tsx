/** @jsxImportSOurce @emotion/react */

import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Grid, Typography, Box } from '@mui/material';

const Advice = (): ReactElement => {

    const styles = {
        alignCenter: css({textAlign: 'center'}),
        inline: css({display: 'inline'}),
        image: {width: '16rem'},
        white: css({color: '#fff'}),
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant='h2' component='h2'>My Advice</Typography>
                <Typography>
                    First off, I don't advise you do what I did because paying off debt kind of sucks. Instead, here's a
                    good way to go about this:
                </Typography>
                <ul>
                    <li>
                        <Typography variant='h4' component='h4' css={styles.inline}>Ignore Tiers:</Typography>
                        <Box>
                            <Typography>
                                The reason most players stick to them is because they're worried about a sudden drop in rent
                                accrual whenever their boost multiplier is reduced. However, whether you're still
                                at 30/20x boost or you've made it to 2x, the rent accrual is abysmal; so even though you
                                would lose a bit of money for a while between tiers, I personally don't see a reason to worry
                                about it.
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
                                way to the next tier. The problem I see with this is that it's more tedious and
                                time-consuming tha should be. If you don't travel often like me, it's best to buy badges on
                                the rare occasion you tr and come across them, especially if you're visiting a location for
                                the first time or a location rarely go to that's far from home. In short, focus on parcels
                                when you're relatively close to home, and badges as you come across them.
                            </Typography>
                        </Box>
                    </li>
                    <li>
                        <Typography variant='h4' component='h4' css={styles.inline}>Watch ads throughout the
                            day:</Typography>
                        <Box>
                            <Typography>
                                This is only important if you're heavily focused on maximizing your income: watching ads
                                sucks, bu really is important if you want to help speed up your progress (even I watch ads
                                throughout the and I'm definitely not F2P). Now that Atlas Arcade (AA) and Atlas Surveys
                                (AS) exist, you don't reaneed to worry about the 2 free AB ads as much anymore. However, if
                                you're not really worried about tand just want to get as many parcels as possible, then just
                                stick to things like AA, AS, and minigames.
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
                                        At a minimum, I'd suggest something like maxing out your ad boost shortly after you
                                        wakeand sometime before bed.
                                    </Typography>
                                </Box>
                            </li>
                            <li>
                                <Typography variant='h5' component='h5' css={styles.inline}>Wait until you get
                                    $6+:</Typography>
                                <Box>
                                    This way, you can convert $1+ beyond $5 to ABs and cash out the rest. Alternatively,
                                    wait unyou earn a minimum of 75ABs and then you only need to convert $1 to buy another
                                    parcel
                                </Box>
                            </li>
                            <li>
                                <Typography variant='h5' component='h5' css={styles.inline}>Patience:</Typography>
                                <Box>
                                    This is going to really suck in the beginning, but if you're willing to do it, just
                                    remember: all profit!
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
                                <Typography variant='h5' component='h5' css={styles.inline}>Spend a bit extra
                                    periodically:</Typography>
                                <Box>
                                    <Typography>
                                        Let's say you can afford $5/week, $20/month, or $100+/month: whatever you feel
                                        comfortawith, there's no harm in buying AB packs once in a while. While you won't
                                        break even for some t it will help your accrual rate grow faster.
                                    </Typography>
                                </Box>
                            </li>
                            <li>
                                <Typography variant='h5' component='h5' css={styles.inline}>Patience:</Typography>
                                <Box>
                                    <Typography>
                                        Even if you are P2P, it's still going to be a tedious process to earn your first
                                        $100, $500, and even $1,000 from this game. I myself currently earn about $5.36/day
                                        from this, but SRBs are wonderful and, in my case, have made my whale spending worth
                                        it!
                                    </Typography>
                                </Box>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default Advice;