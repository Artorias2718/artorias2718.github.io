import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../api/firebase/init';

const useGetAtlasEarth = (index: number) => {
    const key = useGetAtlasEarthKey(index);
    const fetchFn = async () => (await getDocs(collection(db, 'atlasEarth'))).docs[index];
    return useQuery({ queryKey: key, queryFn: fetchFn });
};

const useGetAtlasEarthKey = (index: number) => {
    const key = ['getAtlasEarth', index];
    return key;
};

export default useGetAtlasEarth;
export { useGetAtlasEarthKey };