/** @jsxImportSource @emotion/react */
import { ReactElement, SyntheticEvent, useState } from "react";
import { css, jsx } from '@emotion/react';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '../../../components/FormComponents/TextField.tsx';
import { useForm } from 'react-hook-form';
import parse from 'html-react-parser';
import data from '../../assets/Data/FAQ/Data.ts';

interface Props {
    id: number;
    question: string;
    answer: string;
    expanded: string | false;
    handleChange: (id: number) => (event: SyntheticEvent, newExpanded: boolean) => void;
}

interface SearchFormValues {
    searchQuery: string;
}

const RenderFAQ = ({ id, question, answer, expanded, handleChange }: Props) => {
    const styles = {
        container: css({
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem'
        })
    }
    return (
        <Accordion css={styles.container} expanded={expanded === `panel${id}`} onChange={handleChange(id)}>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <Typography variant="subtitle1">
                    <strong>Q:</strong> {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    <strong>A:</strong> {parse(answer)}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

const FAQ = (): ReactElement => {
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
    const filteredData = data.filter(item =>
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
                {filteredData.length > 0 ? (
                    filteredData.map((item, id) => (
                        <RenderFAQ
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