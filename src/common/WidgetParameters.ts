import { IWidgetActionDescription, IWidgetParameters } from '../@types/Storybook';

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

export enum OnShowDetailsEnum {
  Yes = 'yes',
  No = 'no',
}

export const WIDGET_PARAMETERS: IWidgetParameters = {
  title: 'Название виджета',
  onShowDetails: {
    Yes: OnShowDetailsEnum.Yes,
    No: OnShowDetailsEnum.No,
  },
  actions: {
    None: NO_WIDGET_ACTIONS,
    Some: SOME_WIDGET_ACTIONS,
  },
  width: {
    range: true,
    min: 214,
    max: 1016,
    step: 1,
  },
};
