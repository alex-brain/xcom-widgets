import { IWidgetActionDescription } from '../@types/Storybook';

export const NO_WIDGET_ACTIONS: IWidgetActionDescription[] = [];
export const SOME_WIDGET_ACTIONS: IWidgetActionDescription[] = [
  {
    name: 'First action',
    handler: () => {},
  },
  {
    name: 'Second action',
    handler: () => {},
  },
];
export const WIDGET_PARAMETERS = {
  title: 'Название виджета',
  canExpand: true,
  actions: {
    None: NO_WIDGET_ACTIONS,
    Some: SOME_WIDGET_ACTIONS,
  },
  width: {
    range: true,
    min: 200,
    max: 1200,
    step: 1,
  },
};
