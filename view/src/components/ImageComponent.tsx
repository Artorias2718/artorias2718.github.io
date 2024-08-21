import Image from 'mui-image';
import { CSSProperties, ReactElement } from "react";
import useRenderImage from "../api/queryHooks/root/useRenderImage";

interface Props {
    src: string;
    alt?: string;
    style?: CSSProperties | undefined;
}

const ImageComponent = ({ src, alt, style }: Props): ReactElement => {
    const { data, status, error } = useRenderImage(src);

    if (status !== 'success') {
        return <p>Loading...</p>;
    }

    if (error || !data) {
        return <p>Error loading image or no data available</p>;
    }

    return (
        <Image
            src={data}  // Ensure this is the correct Blob URL
            alt={alt ?? 'Alt Text'}
            style={style}
        />
    );
}

export default ImageComponent;