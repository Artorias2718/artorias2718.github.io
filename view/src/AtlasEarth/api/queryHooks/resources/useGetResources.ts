import useAxiosJwt from "../../../../api/axiosIntanceHooks/useAxiosJwt";
import { useQuery } from '@tanstack/react-query';
import { IResource } from "../../../Types.ts";

const useGetResources = () => {
    const api = useAxiosJwt();
    const key = useGetResourcesKey();
    const fetchFn = async () => (await api.get<ReadonlyArray<IResource>>('atlasEarth/resources'));
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetResourcesKey = () => {
    const key = ['getResources'];
    return key;
};

export default useGetResources;
export { useGetResourcesKey };