import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Image from './image.component';
import { fallbackSrc, loadingSrc, photoSrc } from './image.constants';
const altText = 'abcd';

describe('Image', () => {
    it('should render the image properly', async () => {
        // render the Image component
        const { getByAltText } = render(<Image alt={altText} src={photoSrc} />);

        // retrieve a reference to the image
        const image = getByAltText(altText) as HTMLImageElement;

        // load the image
        fireEvent.load(image);

        // verify that the image exists on the DOM
        expect(image).toBeTruthy();

        // varify the src of the image
        expect(image.src).toEqual(photoSrc);
    });

    it('should display the loader until the image loads', async () => {
        const { getByAltText } = render(<Image alt={altText} src={photoSrc} />);

        const image = getByAltText(altText) as HTMLImageElement;

        expect(image.src).toEqual(loadingSrc);
    });

    it('should handle errors and render the fallback', async () => {
        const { getByAltText } = render(<Image alt={altText} src="#" />);

        const image = getByAltText(altText) as HTMLImageElement;

        // fire the error event for the image
        fireEvent.error(image);

        expect(image.src).toEqual(fallbackSrc);
    });

    it('should apply the provided height', async () => {
        const height = '200px';
        const { getByAltText } = render(<Image alt={altText} height={height} src={photoSrc} />);

        const image = getByAltText(altText) as HTMLImageElement;

        fireEvent.load(image);

        expect(image.style.height).toEqual(height);
    });
});