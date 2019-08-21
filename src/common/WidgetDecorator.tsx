import React from 'react';
import { RenderFunction } from '@storybook/react';
import { WidgetWrapper } from './WidgetWrapper';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import { IStorybookDecoratorContext } from '../@types/Storybook';
import { NO_WIDGET_ACTIONS } from './WidgetParameters';

export const WidgetDecorator = (story: RenderFunction, context: IStorybookDecoratorContext) => {
  const widgetParams = context.parameters.widget;

  return (
    <WidgetWrapper
      width={number('Ширина', 1000, widgetParams.width)}
      title={text('Заголовок', widgetParams.title)}
      canExpand={boolean('Расширяемый', widgetParams.canExpand)}
      actions={select('Действия', widgetParams.actions, NO_WIDGET_ACTIONS)}
    >
      {story()}
    </WidgetWrapper>
  );
};
