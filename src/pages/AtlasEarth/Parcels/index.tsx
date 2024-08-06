/** @jsxImportSource @emotion/react */
import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Grid, Typography, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { decode } from "html-entities";
import ImageComponent from '../../../components/Image.tsx';
import parcelAccrualImg from '../../../assets/Img/Home/ParcelAccrual.jpg';
import data from '../../../assets/Data/Parcels/Data.ts';

const Parcels = (): ReactElement => {
    const styles = {
        alignCenter: css({ textAlign: 'center' }),
        bold: css({ fontWeight: 'bold' }),
        inline: css({ display: 'inline' }),
        small: css({ fontSize: '0.85rem !important' }),
        white: css({ color: '#fff' }),
        image: { width: '16rem' },
        parcelDataGridContainer: css({
            maxWidth: 225,
            margin: '0 auto'
        }),
        rentDataGridContainer: css({
            maxWidth: 650,
            margin: '0 auto'
        }),
    };

    const dims = {
        flex: 1,
        minWidth: 100,
        maxWidth: 150
    };

    const parcelColumns: GridColDef[] = [
        {
            field: 'parcelType',
            headerName: 'Parcel Type',
            flex: 0,
            minWidth: 50,
            maxWidth: 100,
            renderCell: ({ row: item }) => {
                return <span css={styles.white}>{item['parcelType']}</span>;
            }
        },
        {
            field: 'parcelRate',
            headerName: 'Parcel Rate',
            flex: 0,
            minWidth: 100,
            maxWidth: 200,
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
            flex: dims.flex,
            minWidth: dims.minWidth,
            maxWidth: dims.maxWidth,
            renderHeader: () => (
                <Typography css={[styles.alignCenter, styles.bold, styles.small]}>
                    Parcel
                    <br />
                    Count
                </Typography>
            ),
            renderCell: ({ row: item }) => {
                const row = item['row'];
                return <span css={styles.white}>{row[1] > 0 ? decode(`${row[0].toLocaleString()}&ndash;${row[1].toLocaleString()}`) : decode(row[0].toLocaleString())}</span>;
            }
        },
        {
            field: 'boost',
            headerName: 'Boost',
            flex: dims.flex,
            minWidth: dims.minWidth - 50,
            maxWidth: dims.maxWidth - 75,
            renderHeader: () => (
                <Typography css={[styles.alignCenter, styles.bold, styles.small]}>
                    Boost
                </Typography>
            ),
            renderCell: ({ row: item }) => {
                const row = item['row'];
                return <span css={styles.white}>{decode(`${row[2]}&times;`)}</span>;
            }
        },
        {
            field: 'monthlyRentNoAds',
            headerName: 'Rent/mo. (-Ads)',
            flex: dims.flex,
            minWidth: dims.minWidth,
            maxWidth: dims.maxWidth,
            renderHeader: () => (
                <Typography css={[styles.alignCenter, styles.bold, styles.small]}>
                    Rent/mo.
                    <br />
                    (-Ads)
                </Typography>
            ),
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
            headerName: 'Rent/mo. (+Ads)',
            flex: dims.flex,
            minWidth: dims.minWidth,
            maxWidth: dims.maxWidth,
            renderHeader: () => (
                <Typography css={[styles.alignCenter, styles.bold, styles.small]}>
                    Rent/mo.
                    <br />
                    (+Ads)
                </Typography>
            ),
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
            headerName: 'Rent/yr. (+Ads)',
            flex: dims.flex,
            minWidth: dims.minWidth,
            maxWidth: dims.maxWidth,
            renderHeader: () => (
                <Typography css={[styles.alignCenter, styles.bold, styles.small]}>
                    Rent/yr.
                    <br />
                    (+Ads)
                </Typography>
            ),
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
            flex: dims.flex,
            minWidth: dims.minWidth,
            maxWidth: dims.maxWidth,
            renderHeader: () => (
                <Typography css={[styles.alignCenter, styles.bold, styles.small]}>
                    Rent/yr.
                    <br />
                    (SRB)
                </Typography>
            ),
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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h2' component='h2' css={styles.alignCenter}>How much money do parcels give you?</Typography>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Grid item xs={12}>
                        {parcelAccrualImg &&
                            <ImageComponent src={parcelAccrualImg as string} alt='Parcel Accrual Table' style={styles.image} />
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid item xs={12} css={styles.parcelDataGridContainer}>
                        <DataGrid css={styles.parcelDataGridContainer} columns={parcelColumns} rows={data['parcelTypes']} hideFooter={true} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
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
            </Grid>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>US</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={data['rentTables']['usa'].map((row) => row)}
                                  hideFooter={true}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>Mexico</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={data['rentTables']['mex'].map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>International</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={data['rentTables']['intl'].map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
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
        </Grid>
    );
};

export default Parcels;