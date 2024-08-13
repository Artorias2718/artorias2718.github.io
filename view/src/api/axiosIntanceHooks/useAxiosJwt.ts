import axios from 'axios';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import JwtContext from '../../AtlasEarth/contexts/JwtContext.ts';
import { useTranslation } from 'react-i18next';
import { useErrorBoundary } from 'react-error-boundary';

const useAxiosJwt = () => {
    const { jwt, setJwt } = useContext(JwtContext);
    const BASE_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const {showBoundary} = useErrorBoundary();

    const authApi = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
        // headers : {
        //     'Authorization' : `${jwt}`,
        //     'accept-language': i18n.language
        // }
    });

    authApi.interceptors.response.use((response) => {
        if (response.headers && response.headers['authorization']) {
            const jwtStr : string = response.headers['authorization'];
            setJwt(jwtStr);
        }
        return response;
    }, (error) => {
        if (error.response && error.response.status === 401) {
            navigate('/Login');
        }
        else {
            showBoundary(error);
        }
    });

    return authApi;
};

export default useAxiosJwt;