import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SimpleButton } from '@utils/components/simpleButton/simpleButton.component';

import 'bootstrap/dist/css/bootstrap.css'; 

export default {
  title: 'Utility Components/Button',
  component: SimpleButton
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => <SimpleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'Primary Button',
  buttonType: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonText: 'Secondary Button',
  buttonType: 'Secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  buttonText: 'Danger Button',
  buttonType: 'Danger'
}