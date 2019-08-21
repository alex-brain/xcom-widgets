import React from 'react';
import README from './README.md';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProductivityWidget } from '../../src/widget-productivity/Widget';
import { getRandomProductivityData, IProductivityWidgetData, PRODUCTIVITY_WIDGET_DATA } from './Data';
import { button } from '@storybook/addon-knobs';

const onSelectHandler = (id: string) => action(`Selected id=${id}`);
const logDataAction = action('Log data');

const ProductivityStory = (props: { data: IProductivityWidgetData; hasReload?: boolean }) => {
  if (props.hasReload) {
    button('Обновить', () => {}, 'Данные');
  }
  console.log('ProductivityStory.props.data', props.data);
  Promise.resolve().then(() => logDataAction(props.data));
  return <ProductivityWidget {...props.data} onSelect={onSelectHandler} />;
};

storiesOf('Productivity Widget', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
    widget: {
      title: 'Производительность за вчера, 19 августа',
      width: {
        min: 920,
        initial: 920,
      },
    },
  })
  .add('default', () => <ProductivityStory data={PRODUCTIVITY_WIDGET_DATA.DEFAULT} />)
  .add('random', () => <ProductivityStory data={getRandomProductivityData()} hasReload={true} />)
  .add('loading', () => <ProductivityStory data={PRODUCTIVITY_WIDGET_DATA.LOADING} />)
  .add('error', () => <ProductivityStory data={PRODUCTIVITY_WIDGET_DATA.ERROR} />)
  .add('minimum data', () => <ProductivityStory data={PRODUCTIVITY_WIDGET_DATA.MIN} />)
  .add('maximum data', () => <ProductivityStory data={PRODUCTIVITY_WIDGET_DATA.MAX} />);
