import React from 'react';
import styles from './WidgetWrapper.css';
import variables from '../Variables.css';
import { SvgIconProps } from '@skbkontur/react-icons/internal/SvgIcon';
import ArrowSizeMaxIcon from '@skbkontur/react-icons/ArrowSizeMax';
import MenuKebabIcon from '@skbkontur/react-icons/MenuKebab';
import { IWidgetActionDescription } from '../@types/Storybook';

export interface IWidgetWrapperProps {
  width: number;
  title?: string;
  canExpand?: boolean;
  actions?: Array<IWidgetActionDescription>;
}

export class WidgetWrapper extends React.Component<IWidgetWrapperProps, {}> {
  public render() {
    const { width, title, canExpand, actions, children } = this.props;
    const hasHeader = canExpand || !!title || (!!actions && actions.length > 0);
    return (
      <div className={styles.wrapper} style={{ width }}>
        {hasHeader && this.renderHeader()}
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }

  private renderHeader() {
    const { title, canExpand, actions } = this.props;
    const hasActions = actions && actions.length > 0;

    return (
      <div className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.icons}>
          {hasActions && this.renderIcon(MenuKebabIcon)}
          {canExpand && this.renderIcon(ArrowSizeMaxIcon)}
        </div>
      </div>
    );
  }

  // TODO: PR to react-ui to expose common icon interface
  private renderIcon(Icon: (props: SvgIconProps) => JSX.Element) {
    return (
      <div className={styles.icon}>
        <Icon size={variables.LARGE_ICON_SIZE} color={variables.GRAY_COLOR} />
      </div>
    );
  }
}
