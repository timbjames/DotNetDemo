import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { store } from '@state/redux-store';
import ProviderWrapper from '@state/provider.component';
import Page from '@pages/people/people.page';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

const withProvider = (story: () => StoryFnReactReturnType) => (
  <ProviderWrapper store={store}>
    { story() }
  </ProviderWrapper>
);

export default {
  title: 'Pages/People',
  component: Page,
  decorators: [
    withProvider
  ]
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const People = Template.bind({});
