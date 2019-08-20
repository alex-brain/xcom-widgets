import React from 'react';
import { RenderFunction } from '@storybook/react';
import { WidgetWrapper } from './WidgetWrapper';

export const WidgetDecorator = (story: RenderFunction) => {
  return (
    <WidgetWrapper width={1000} title={'Название виджета'} canExpand={true}>
      {story()}
    </WidgetWrapper>
  );
};
