/** @jsxImportSOurce @emotion/react */

import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Grid, Typography, Box } from '@mui/material';
import { IData } from '../../Types.ts'
import parse from "html-react-parser";
import useGetAtlasEarth from "../../api/queryHooks/useGetAtlasEarth.ts";

const Advice = (): ReactElement => {
    const styles = {
        alignCenter: css({textAlign: 'center'}),
        inline: css({display: 'inline'}),
        image: {width: '16rem'},
        white: css({color: '#fff'}),
    };

    const { data: advice } = useGetAtlasEarth(0);

    const data = advice && advice.data() && advice.data().data;

    const section1 = data && data.en && data.en.section1;
    const section2 = data && data.en && data.en.section2;

    const list1: IData[] = section2 && section2.list1 && section2.list1;
    const list2: IData[] = section2 && section2.list2 && section2.list2;
    const list3: IData[] = section2 && section2.list3 && section2.list3;

    return section1 && section2 && list1 && list2 && list3 && (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant='h2' component='h2'>{section1.label}</Typography>
                <Typography>
                    {parse(section1.description)}
                </Typography>
                <ul>
                    {list1.map((item) => {
                        switch(item.id) {
                            case 5:
                                return (
                                    <li key={item.id}>
                                        <Typography variant='h4' component='h4' css={styles.inline}>
                                            {item.label}
                                            <Box>
                                                <ul>
                                                    {
                                                        list2.map((item: any) => {
                                                            return (
                                                                <li key={item.id}>
                                                                    <Typography variant='h5' component='h5'
                                                                                css={styles.inline}>
                                                                        {item.label}
                                                                    </Typography>
                                                                    <Box>
                                                                        <Typography>
                                                                            {parse(item.description)}
                                                                        </Typography>
                                                                    </Box>
                                                                </li>);
                                                            }
                                                        )
                                                    }
                                                </ul>
                                            </Box>
                                        </Typography>
                                    </li>
                                );
                            case 6:
                                return (
                                    <li key={item.id}>
                                        <Typography variant='h4' component='h4' css={styles.inline}>
                                            {item.label}
                                                <ul>
                                                    {
                                                        list3.map((item) => {
                                                            return (
                                                                <li key={item.id}>
                                                                    <Typography variant='h5' component='h5'
                                                                                css={styles.inline}>
                                                                        {item.label}
                                                                    </Typography>
                                                                    <Box>
                                                                        <Typography>
                                                                            {parse(item.description)}
                                                                        </Typography>
                                                                    </Box>
                                                                </li>);
                                                            }
                                                        )
                                                    }
                                                </ul>
                                        </Typography>
                                    </li>
                                );
                            default:
                                return (
                                    <li key={item.id}>
                                        <Typography variant='h4' component='h4' css={styles.inline}>
                                            {item.label}
                                        </Typography>
                                        <Typography>
                                            {item.description}
                                        </Typography>
                                    </li>
                                );
                        }
                    })}
                </ul>
            </Grid>
        </Grid>
    );
};

export default Advice;