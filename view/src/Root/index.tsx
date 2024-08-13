import {ReactElement, useEffect} from 'react'
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import './index.css'
import useGetPages from "../api/queryHooks/root/useGetPages.ts";

const Root = (): ReactElement => {
    useEffect(() => {
        document.title = 'Artorias2718';
    }, []);

    const { data } = useGetPages();

    return (
        <>
            <h2>Apps</h2>
            <ul>
                {
                    data && data.data.map((item) => {
                        //const href = item.replaceAll(regExp, '');
                        return (<li key={item.id}><MuiLink component={RouterLink} to={`/${item.href}`}>{item.label}</MuiLink></li>);
                    })
                }
            </ul>
        </>
    )};

export default Root;