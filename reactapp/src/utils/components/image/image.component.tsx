import React, { useState } from 'react';

import { fallbackSrc, loadingSrc } from './image.constants';

export interface IImageProps {
    alt: string;
    height?: string | number;
    src: string;
}

const Image: React.FC<IImageProps> = ({ alt, src, height = '400px' }) => {

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);

    const imageSrc = !err ? (loading ? loadingSrc : src) : fallbackSrc;

    return (
        <img
            alt={alt}
            onError={() => { setErr(true) }}
            onLoad={() => { setLoading(false) }}
            src={imageSrc}
            style={{ height, borderRadius: '10px' }} />
    );
};

export default Image;