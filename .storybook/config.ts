import React from 'react';
import centered from '@storybook/addon-centered/react';
import { configure, addDecorator } from '@storybook/react';
import { WidgetDecorator } from '../src/-common/WidgetDecorator';

addDecorator(WidgetDecorator);
addDecorator(centered);

const storiesContext = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  storiesContext.keys().forEach(filename => storiesContext(filename));
}

configure(loadStories, module);
