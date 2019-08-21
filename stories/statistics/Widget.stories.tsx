import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatisticsWidget } from '../../src/statistics/Widget';
import README from './README.md';

storiesOf('Statistic Widget', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('default', () => {
    return <StatisticsWidget />;
  });
