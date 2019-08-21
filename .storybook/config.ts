import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WidgetDecorator } from '../src/common/WidgetDecorator';
import centered from '@storybook/addon-centered/react';
import { addReadme } from 'storybook-readme';
import { WIDGET_PARAMETERS } from '../src/common/WidgetParameters';
import { BACKGROUNDS } from './backgrounds';

addDecorator(addReadme);
addDecorator(withKnobs);
addDecorator(WidgetDecorator);
addDecorator(centered);

addParameters({
  options: {
    isFullscreen: false,
    showPanel: true,
    panelPosition: 'right',
  },
  knobs: {
    timestamps: true,
    escapeHTML: true,
  },
  backgrounds: BACKGROUNDS,
  widget: WIDGET_PARAMETERS,
});

const storiesContext = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  storiesContext.keys().forEach(filename => storiesContext(filename));
}

configure(loadStories, module);
