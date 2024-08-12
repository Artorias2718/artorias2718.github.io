import { CSSProperties, ReactElement } from "react";
import Image from 'mui-image';

interface Props {
    src: string;
    alt?: string;
    style?: CSSProperties;
}

const ImageComponent = ({ src, alt = 'Alt Text', style }: Props): ReactElement => {
    return <Image src={src} alt={alt} style={style} />;
};

export default ImageComponent;