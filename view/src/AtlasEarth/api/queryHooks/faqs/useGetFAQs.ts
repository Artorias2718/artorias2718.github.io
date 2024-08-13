import useAxiosJwt from "../../../../api/axiosIntanceHooks/useAxiosJwt";
import { useQuery } from '@tanstack/react-query';
import { IFAQ } from "../../../Types.ts";

const useGetFAQs = () => {
    const api = useAxiosJwt();
    const key = useGetFAQsKey();
    const fetchFn = async () => (await api.get<ReadonlyArray<IFAQ>>('atlasEarth/faqs'));
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetFAQsKey = () => {
    const key = ['getFAQs'];
    return key;
};

export default useGetFAQs;
export { useGetFAQsKey };