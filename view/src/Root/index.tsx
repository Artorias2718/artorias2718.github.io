import {ReactElement, useEffect} from 'react'
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import './index.css'
import data from '../assets/Data/Data.ts';

const Root = (): ReactElement => {
    useEffect(() => {
        document.title = 'Artorias2718';
    }, []);

    const regExp = / /g;

    return (
        <>
            <h2>Apps</h2>
            <ul>
                {
                    data && data.map((item, id) => {
                        const href = item.replaceAll(regExp, '');
                        return (<li key={id}><MuiLink component={RouterLink} to={`/${href}`}>{item}</MuiLink></li>);
                    })
                }
            </ul>
        </>
    )};

export default Root;