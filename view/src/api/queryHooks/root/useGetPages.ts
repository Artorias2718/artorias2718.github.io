import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/init.ts";

const useGetPages = () => {
    const key = useGetPagesKey();
    const fetchFn = async() => await getDocs(collection(db, 'root'));
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetPagesKey = () => {
    const key = ['getPages'];
    return key;
};

export default useGetPages;
export { useGetPagesKey };