import useAxiosJwt from "../../../api/axiosIntanceHooks/useAxiosJwt";
import { useQuery } from '@tanstack/react-query';
import { IPage } from '../../../Types.ts';

const useGetPages = () => {
    const api = useAxiosJwt();
    const key = useGetPagesKey();
    const fetchFn = async () => (await api.get<ReadonlyArray<IPage>>('root/pages'));
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetPagesKey = () => {
    const key = ['getPages'];
    return key;
};

export default useGetPages;
export { useGetPagesKey };