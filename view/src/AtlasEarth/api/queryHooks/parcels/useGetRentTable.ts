import useAxiosJwt from "../../../../api/axiosIntanceHooks/useAxiosJwt";
import { useQuery } from '@tanstack/react-query';
import { IRentRow } from "../../../Types.ts";

const useGetRentTable = (rentTableKey : string) => {
    const api = useAxiosJwt();
    const key = useGetRentTableKey(rentTableKey);
    const fetchFn = async () => (await api.get<ReadonlyArray<IRentRow>>(`atlasEarth/rentTable?key=${rentTableKey}`));
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetRentTableKey = (rentTableKey: string) => {
    const key = ['getRentTable', rentTableKey];
    return key;
};

export default useGetRentTable;
export { useGetRentTableKey };