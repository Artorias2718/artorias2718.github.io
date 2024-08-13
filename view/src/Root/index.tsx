import { ReactElement, useEffect } from 'react'
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import './index.css'
import useGetPages from "../api/queryHooks/root/useGetPages.ts";
import { IPage } from "../Types.ts";

const Root = (): ReactElement => {
    useEffect(() => {
        document.title = 'Artorias2718';
    }, []);

    const { data: pages } = useGetPages();
    const doc = pages && pages['docs'] && pages['docs'][0];

    const data = doc?.data().data;

    return (
        <>
            <h2>Apps</h2>
            <ul>
                {
                    data && data.map((item: IPage) => {
                        return (<li key={item.id}><MuiLink component={RouterLink} to={`/${item.href}`}>{item.label}</MuiLink></li>);
                    })
                }
            </ul>
        </>
    )};

export default Root;