import { ReactElement, SyntheticEvent, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import parse from 'html-react-parser';
import { decode } from 'html-entities';
import data from '../../assets/Data/FAQ/Data.ts';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    marginBottom: theme.spacing(1),
    '&:before': {
        display: 'none',
    },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    '& .MuiAccordionSummary-content': {
        margin: 0,
    },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

interface Props {
    id: number;
    question: string;
    answer: string;
    expanded: string | false;
    handleChange: (id: number) => (event: SyntheticEvent, newExpanded: boolean) => void;
}

const RenderFAQ = ({ id, question, answer, expanded, handleChange }: Props) => {
    // Log the answer before decoding
    console.log(`Original Answer (id: ${id}):`, answer);
    const decodedAnswer = parse(decode(answer));
    // Log the decoded answer
    console.log(`Decoded Answer (id: ${id}):`, decodedAnswer);

    return (
        <StyledAccordion expanded={expanded === `panel${id}`} onChange={handleChange(id)}>
            <StyledAccordionSummary expandIcon={<ArrowDropDownIcon />}>
                <Typography variant="subtitle1">
                    <strong>Q:</strong> {question}
                </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
                <Typography variant="body2">
                    <strong>A:</strong> {decodedAnswer}
                </Typography>
            </StyledAccordionDetails>
        </StyledAccordion>
    );
};

const FAQ = (): ReactElement => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (id: number) => (_event: SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? `panel${id}` : false);
    };

    return (
        <Grid container spacing={2}>
            <Grid item lg={12}>
                <Typography variant="h1" component="h1">FAQ</Typography>
                <Typography>
                    This is for things I frequently see asked in FB groups
                </Typography>
            </Grid>
            <Grid item lg={12}>
                {data && data.map((item, id) => (
                    <RenderFAQ
                        key={id}
                        id={id + 1}
                        question={item.question}
                        answer={item.answer}
                        expanded={expanded}
                        handleChange={handleChange}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default FAQ;