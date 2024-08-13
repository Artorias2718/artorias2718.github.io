import {css} from "@emotion/react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import parse from "html-react-parser";
import {SyntheticEvent} from "react";

interface Props {
    id: number;
    question: string;
    answer: string;
    expanded: string | false;
    handleChange: (id: number) => (event: SyntheticEvent, newExpanded: boolean) => void;
}

const FAQComponent = ({ id, question, answer, expanded, handleChange }: Props) => {
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

export default FAQComponent;