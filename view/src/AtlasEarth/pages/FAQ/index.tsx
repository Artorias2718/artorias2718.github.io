/** @jsxImportSource @emotion/react */
import { ReactElement, SyntheticEvent, useState } from "react";
import { css } from '@emotion/react';
import { Grid, Typography } from "@mui/material";
import TextField from '../../../components/FormComponents/TextField';
import { useForm } from 'react-hook-form';
import useGetAtlasEarth from "../../api/queryHooks/useGetAtlasEarth";
import FAQComponent from "./FAQComponent";
import { IFAQ } from "../../Types";

interface SearchFormValues {
    searchQuery: string;
}

const FAQ = (): ReactElement => {
    const { data: faqs } = useGetAtlasEarth(1);
    const data = faqs && faqs.data && faqs.data().data['en'];

    const [expanded, setExpanded] = useState<string | false>(false);
    const { control, watch } = useForm<SearchFormValues>({
        defaultValues: {
            searchQuery: ''
        },
    });

    const values = watch();
    const searchQuery = values.searchQuery || '';

    const handleChange = (id: number) => (event: SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? `panel${id}` : false);
    };

    const styles = {
        textField: css({
            background: '#fff',
            color: 'inherit',
            width: '100%'
        })
    }

    // Filter the data based on the search query
    const filteredData = data && data.filter((item: IFAQ) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Grid container spacing={2}>
            <Grid item lg={12}>
                <Typography variant="h1" component="h1">FAQs</Typography>
                <Typography>
                    This is for things I frequently see asked in FB groups
                </Typography>
                <TextField
                    name='searchQuery'
                    styles={styles.textField}
                    type='text'
                    label='Search FAQs'
                    control={control}
                />
            </Grid>
            <Grid item lg={12}>
                {filteredData && filteredData.length > 0 ? (
                    filteredData.map((item: IFAQ, id: number) => (
                        <FAQComponent
                            key={id}
                            id={id + 1}
                            question={item.question}
                            answer={item.answer}
                            expanded={expanded}
                            handleChange={handleChange}
                        />
                    ))
                ) : (
                    <Typography variant="body2">
                        No FAQs match your search criteria.
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default FAQ;