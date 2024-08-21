import useAxiosJwt from "../../../api/axiosIntanceHooks/useAxiosJwt";
import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

const useRenderImage = (imgSrc: string) => {
    const api = useAxiosJwt();
    const key = useRenderImageKey(imgSrc);

    const fetchFn = async () => {
        const inputObj: AxiosRequestConfig = {
            params: { imgSrc: imgSrc },
            responseType: 'blob'
        };
        const response = await api.get(`image/renderImage`, inputObj);
        return URL.createObjectURL(response.data ?? '');  // Convert Blob to URL
    };

    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useRenderImageKey = (imgSrc: string) => {
    const key = ['renderImage', imgSrc];
    return key;
};

export default useRenderImage;
export { useRenderImageKey };