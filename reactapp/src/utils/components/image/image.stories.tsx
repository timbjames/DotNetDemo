import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '@utils/components/image/image.component';
import { photoSrc } from '@utils/components/image/image.constants';

const altText = 'abcd';

export default {
    title: 'Utility Components/Image',
    component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    alt: altText,
    src: photoSrc
};

export const Src404 = Template.bind({});
Src404.args = {
    alt: 'something broke',
    src: '#'
};