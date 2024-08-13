import { ReactElement } from 'react';
import { Typography, Grid } from '@mui/material';
import parse from "html-react-parser";
import useGetAtlasEarth from "../../api/queryHooks/useGetAtlasEarth.ts";

const Timeline = (): ReactElement => {
    const { data: timeline } = useGetAtlasEarth(7);
    const data = timeline && timeline.data() && timeline.data().data;

    const section1 = data && data.en && data.en.section1;
    const section2 = data && data.en && data.en.section2;

    return section1 && section2 && (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant='h2' component='h2'>{section1.label}</Typography>
                <Typography>
                    {parse(section1.description)}
                </Typography>
                <Typography>
                    {parse(section2.description)}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Timeline;