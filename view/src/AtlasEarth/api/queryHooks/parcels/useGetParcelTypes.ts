import useAxiosJwt from "../../../../api/axiosIntanceHooks/useAxiosJwt";
import { useQuery } from '@tanstack/react-query';
import { IParcelType } from "../../../Types.ts";

const useGetParcelTypes = () => {
    const api = useAxiosJwt();
    const key = useGetParcelTypesKey();
    const fetchFn = async () => (await api.get<ReadonlyArray<IParcelType>>('atlasEarth/parcelTypes'));
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetParcelTypesKey = () => {
    const key = ['getParcelTypes'];
    return key;
};

export default useGetParcelTypes;
export { useGetParcelTypesKey };