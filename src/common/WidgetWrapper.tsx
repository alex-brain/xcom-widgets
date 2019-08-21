import React from 'react';
import styles from './WidgetWrapper.css';
import variables from '../Variables.css';
import { SvgIconProps } from '@skbkontur/react-icons/internal/SvgIcon';
import ArrowSizeMaxIcon from '@skbkontur/react-icons/ArrowSizeMax';
import MenuKebabIcon from '@skbkontur/react-icons/MenuKebab';
import { IWidgetActionDescription } from '../@types/Storybook';
import { action } from '@storybook/addon-actions';

export interface IWidgetWrapperProps {
  width: number;
  title?: string;
  onShowDetails?: () => void;
  actions?: Array<IWidgetActionDescription>;
}

export class WidgetWrapper extends React.Component<IWidgetWrapperProps, {}> {
  public render() {
    const { width, title, onShowDetails, actions, children } = this.props;
    const hasHeader = !!onShowDetails || !!title || (!!actions && actions.length > 0);
    return (
      <div className={styles.wrapper} style={{ width }}>
        {hasHeader && this.renderHeader()}
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }

  private renderHeader() {
    const { title, onShowDetails, actions } = this.props;
    const hasActions = actions && actions.length > 0;
    const hasShowDetails = !!onShowDetails;

    return (
      <div className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.icons}>
          {hasActions && this.renderIcon(MenuKebabIcon, this.toggleActions)}
          {hasShowDetails && this.renderIcon(ArrowSizeMaxIcon, this.onShowDetailsHandler)}
        </div>
      </div>
    );
  }

  // TODO: PR to react-ui to expose common icon interface
  private renderIcon(Icon: (props: SvgIconProps) => JSX.Element, handler?: () => void) {
    return (
      <div className={styles.icon} onClick={handler ? handler : undefined}>
        <Icon size={variables.LARGE_ICON_SIZE} />
      </div>
    );
  }

  private onShowDetailsHandler = () => {
    if (this.props.onShowDetails) {
      this.props.onShowDetails();
    }
  };
  private toggleActions = () => {
    action('Toggle actions')();
  };
}
