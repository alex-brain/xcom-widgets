import React from 'react';
import { RenderFunction } from '@storybook/react';
import { WidgetWrapper } from './WidgetWrapper';
import { text, number, select } from '@storybook/addon-knobs';
import { IStorybookDecoratorContext } from '../@types/Storybook';
import { NO_WIDGET_ACTIONS, OnShowDetailsEnum } from './WidgetParameters';
import { action } from '@storybook/addon-actions';

const WIDGET_GROUP_ID = 'Виджет';
const onShowDetailsHandler = action('Show Details');

export const WidgetDecorator = (story: RenderFunction, context: IStorybookDecoratorContext) => {
  const widgetParams = context.parameters.widget;

  const width = number('Ширина', widgetParams.width.initial || 1000, widgetParams.width, WIDGET_GROUP_ID);
  const title = text('Заголовок', widgetParams.title, WIDGET_GROUP_ID);
  const actions = select('Действия', widgetParams.actions, NO_WIDGET_ACTIONS, WIDGET_GROUP_ID);
  const onShowDetails =
    select('Подробности', widgetParams.onShowDetails, OnShowDetailsEnum.Yes, WIDGET_GROUP_ID) === OnShowDetailsEnum.Yes
      ? onShowDetailsHandler
      : undefined;

  return (
    <WidgetWrapper width={width} title={title} actions={actions} onShowDetails={onShowDetails}>
      {story()}
    </WidgetWrapper>
  );
};
