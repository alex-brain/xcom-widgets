import React from 'react';
import README from './README.md';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProductivityWidget } from '../../src/widget-productivity/Widget';
import { STATISTICS_WIDGET_DATA } from './Data';

const onSelectHandler = (id: string) => action(`Selected id=${id}`);

storiesOf('Productivity Widget', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
    widget: {
      title: 'Производительность за вчера, 19 августа',
      width: {
        min: 920,
      },
    },
  })
  .add('default', () => {
    return <ProductivityWidget {...STATISTICS_WIDGET_DATA.DEFAULT} onSelect={onSelectHandler} />;
  })
  .add('loading', () => {
    return <ProductivityWidget {...STATISTICS_WIDGET_DATA.LOADING} onSelect={onSelectHandler} />;
  })
  .add('minimum data', () => {
    return <ProductivityWidget {...STATISTICS_WIDGET_DATA.MIN} onSelect={onSelectHandler} />;
  })
  .add('maximum data', () => {
    return <ProductivityWidget {...STATISTICS_WIDGET_DATA.MAX} onSelect={onSelectHandler} />;
  });
