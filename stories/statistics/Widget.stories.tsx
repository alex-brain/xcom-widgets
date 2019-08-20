import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatisticsWidget } from '../../src/statistics/Widget';

storiesOf('Statistic Widget', module).add('default', () => {
  return <StatisticsWidget />;
});
