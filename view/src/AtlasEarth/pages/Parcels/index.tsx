/** @jsxImportSource @emotion/react */
import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Box, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { decode } from "html-entities";
import parse from 'html-react-parser';
import ImageComponent from '../../components/Image.tsx';
import parcelAccrualImg from '../../assets/Img/Home/ParcelAccrual.jpg';
import useGetAtlasEarth from "../../api/queryHooks/useGetAtlasEarth";
import { IData, IParcelType, IRentRow } from "../../Types";

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

    const { data: parcelTypesResponse } = useGetAtlasEarth(3);
    const { data: parcelsResponse } = useGetAtlasEarth(4);
    const { data: rentTablesResponse } = useGetAtlasEarth(5);

    const parcelTypesData = parcelTypesResponse && parcelTypesResponse?.data() ? parcelTypesResponse.data().data : [];
    const parcelsData = parcelsResponse && parcelsResponse.data() ? parcelsResponse.data().data : [];
    const rentTablesData = rentTablesResponse && rentTablesResponse?.data() ? rentTablesResponse.data().data : [];

    const section1: IData = parcelsData && parcelsData.section1 && parcelsData.section1;
    const section2: IData = parcelsData && parcelsData.section2 && parcelsData.section2;

    const tableData = {
        'usa': rentTablesData && rentTablesData.usa ? rentTablesData.usa : [],
        'mex': rentTablesData && rentTablesData.mex ? rentTablesData.mex : [],
        'gerfra': rentTablesData && rentTablesData.gerfra ? rentTablesData.gerfra : [],
        'skorjpn': rentTablesData && rentTablesData.skorjpn ? rentTablesData.skorjpn : [],
        'brz': rentTablesData && rentTablesData.brz ? rentTablesData.brz : [],
        'intl': rentTablesData && rentTablesData.intl ? rentTablesData.intl : []
    };

    const parcelColumns: GridColDef<IParcelType>[] = [
        {
            field: 'parcelType',
            headerName: 'Parcel Type',
            flex: 0,
            minWidth: 50,
            maxWidth: 100,
            renderCell: ({ row: item }) => {
                return <span css={styles.white}>{item.type}</span>
            }
        },
        {
            field: 'parcelRate',
            headerName: 'Parcel Rate',
            flex: 0,
            minWidth: 100,
            maxWidth: 200,
            renderCell: ({ row: item }) => {
                const parcelRate = item.rate;
                const amount = parcelRate < 1
                    ? <span>{`${decode(`$${(parcelRate * 1000000000).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}&times;10`)}`}<sup>-9</sup></span>
                    : decode(`$${parcelRate.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        }
    ];

    const rentColumns: GridColDef<IRentRow>[] = [
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
                const row = item.row;
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
                const row = item.row;
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
                const row = item.row;
                const amount = row[3] < 1
                    ? <span>{`${decode(`$${(Math.round(row[3] * 10000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}&times;10`)}`}<sup>-1</sup></span>
                    : decode(`$${row[3].toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 4 })}`);
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
                const row = item.row;
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
                const row = item.row;
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
                const row = item.row;
                const amount = row[6] < 1
                    ? <span>{`${decode(`$${(Math.round(row[6] * 10000) / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}&times;10`)}`}<sup>-1</sup></span>
                    : decode(`$${row[6].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
                return <span css={styles.white}>{amount}</span>;
            }
        }
    ];

    return section1 && section2 && (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h2' component='h2' css={styles.alignCenter}>{section1.label}</Typography>
            </Grid>

            <Box css={css({display: 'inline-flex', width: '100%' })}>
                <Grid item xs={12} xl={6}>
                    {parcelAccrualImg &&
                        <ImageComponent src={parcelAccrualImg as string} alt='Parcel Accrual Table' style={styles.image} />
                    }
                </Grid>
                <Grid item xs={12} xl={6}>
                    <DataGrid css={styles.parcelDataGridContainer} columns={parcelColumns} rows={(parcelTypesData ? parcelTypesData : []) as IParcelType[]} hideFooter={true} />
                </Grid>
            </Box>

            <Grid item xs={12}>
                <Typography>
                    {parse(section1.description)}
                </Typography>
                <br/>
            </Grid>
                <Grid item xs={6}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>USA</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={(tableData['usa'] as IRentRow[]).map((row) => row)}
                                  hideFooter={true}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>Mexico</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={(tableData['mex'] as IRentRow[]).map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>Germany/France</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={(tableData['gerfra'] as IRentRow[]).map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>S. Korea/Japan</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={(tableData['skorjpn'] as IRentRow[]).map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>Brazil</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={(tableData['brz'] as IRentRow[]).map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h2' component='h2' css={styles.alignCenter}>International</Typography>
                    <Box css={styles.rentDataGridContainer}>
                        <DataGrid columns={rentColumns}
                                  rows={(tableData['intl'] as IRentRow[]).map((row) => row)}
                                  hideFooter={true} />
                    </Box>
                </Grid>
            <Grid item xs={12}>
                <br/>
                <Typography>
                    {parse(section2.description)}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Parcels;