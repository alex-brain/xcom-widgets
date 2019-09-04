import React from 'react';
import { IUser } from '../@types/External';
import * as styles from './Widget.css';
import Hint from '@skbkontur/react-ui/components/Hint';

interface ITroublesData {
  totalCount: number;
}

interface ICallsData {
  factCallsCount: number;
  planCallsCount: number;
  outgoingTalksCount: number;
  incomingTalksCount: number;
  spentTime: number;
}

interface IDealData {
  newDealsCount: number;
  billsSum: number;
  billsCount: number;
  paidSum: number;
  paidCount: number;
  monthPlanSum: number;
  monthFactSum: number;
  declinedCount: number;
}

interface IProductivityWidgetItem {
  user: IUser;
  troubles: ITroublesData;
  calls: ICallsData;
  deals: IDealData;
}

export interface IProductivityWidgetProps {
  users: IUser[];
  isLoading: boolean;
  items: IProductivityWidgetItem[];
  onSelect: (id: string) => void;
}

interface IProductivityWidgetState {}

export interface EventHandlerProps {
  onClick: (e: React.MouseEvent) => void;
}

export class ProductivityWidget extends React.Component<
  IProductivityWidgetProps,
  IProductivityWidgetState,
  EventHandlerProps
> {
  shortenName = (name: string) => {
    let indexOfSpace = name.indexOf(' ');
    let shortName = name.slice(indexOfSpace, name.length);
    let surnameLetter = name.slice(0, 1);
    return `${shortName} ${surnameLetter}.`;
  };

  msToTime = (milliseconds: number) => {
    let hours = milliseconds / (1000 * 60 * 60);
    let absoluteHours = Math.floor(hours);

    let minutes = (hours - absoluteHours) * 60;
    let absoluteMinutes = Math.floor(minutes);
    let wholeMinutes = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    let seconds = (minutes - absoluteMinutes) * 60;
    let absoluteSeconds = Math.floor(seconds);
    let wholeSeconds = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return `${absoluteHours}:${wholeMinutes}:${wholeSeconds}`;
  };

  calcPercent = (plan: number, fact: number) => {
    let percent = (fact / plan) * 100;
    let absolutuPercent = Math.floor(percent);
    return absolutuPercent;
  };

  calcSummary = (key: string, subkey: string): number => {
    const { items } = this.props;
    const summary = items.reduce((acc, sum) => acc + (sum[key][subkey] || 0), 0);
    return summary;
  };

  onClick = (id: string) => {
    const { onSelect } = this.props;
    return (event: React.MouseEvent) => {
      onSelect(id);
      event.preventDefault();
    };
  };

  renderHeader = () => {
    return (
      <tr className={styles.heading}>
        <td className={styles.lefttext}>Менеджер</td>
        <td className={styles.calls}>
          <Hint text="Количество наборов">Наборы</Hint>
        </td>
        <td className={styles.tabletitle}>
          <Hint text="Количество исходящих разговоров">Исх</Hint>
        </td>
        <td className={styles.tabletitle}>
          <Hint text="Количество входящих разговоров">Вх</Hint>
        </td>
        <td className={styles.tabletitle}>
          <Hint text="Общее время входящих и исходящих разговоров">Время</Hint>
        </td>
        <td className={styles.tabletitle}>
          <Hint text="Количество новых клиентов, где был хоть один разговор">Новые</Hint>
        </td>
        <td className={styles.tabletitle}>
          <Hint text="Количество карточек, переведенных в отказ">Отказы</Hint>
        </td>
        <td className={styles.floatright}>
          <Hint text="Сумма и количество выставленных счетов">Счета,</Hint>
        </td>
        <td className={styles.floatleft}>
          <Hint text="Сумма и количество выставленных счетов">&nbsp;₽</Hint>
        </td>
        <td className={styles.floatright}>
          <Hint text="Сумма и количество оплаченных счетов">Оплаты, </Hint>
        </td>
        <td className={styles.floatleft}>
          <Hint text="Сумма и количество оплаченных счетов">&nbsp;₽</Hint>
        </td>
        <td colSpan={2} className={styles.summarymonthtitle}>
          <Hint text="Общая сумма оплат с начала месяца">Факт месяца, ₽</Hint>
        </td>
      </tr>
    );
  };

  renderLoading = () => {
    return (
      <div>
        <div className={styles.isloading}>
          <div className={styles.graycircle}></div>
          <div className={styles.loadgradient}></div>
        </div>
        <div className={styles.isloading}>
          <div className={styles.graycircle}></div>
          <div className={styles.loadgradient}></div>
        </div>
        <div className={styles.isloading}>
          <div className={styles.graycircle}></div>
          <div className={styles.loadgradient}></div>
        </div>
        <div className={styles.isloading}>
          <div className={styles.graycircle}></div>
          <div className={styles.loadgradient}></div>
        </div>
      </div>
    );
  };

  renderError = () => {
    return (
      <div className={styles.errorpage}>
        <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="&#208;&#152;&#208;&#186;&#208;&#190;&#208;&#189;&#208;&#186;&#208;&#176;">
            <path
              id="Oval 1708 Copy 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.7253 48.6694C39.165 48.6694 50.0601 37.7744 50.0601 24.3347C50.0601 10.895 39.165 0 25.7253 0C12.2857 0 1.39062 10.895 1.39062 24.3347C1.39062 37.7744 12.2857 48.6694 25.7253 48.6694Z"
              fill="#E6E6E6"
            />
            <path
              id="Rectangle 1238"
              d="M6.5097 33.6735L6.11252 33.4255L5.71534 33.6735L0.75 36.7734V4.53101H24.9037L35.9251 15.5402V36.7734L30.9598 33.6735L30.5626 33.4255L30.1654 33.6735L24.4501 37.2416L18.7347 33.6735L18.3376 33.4255L17.9404 33.6735L12.225 37.2416L6.5097 33.6735Z"
              fill="white"
              stroke="#E6E6E6"
              stroke-width="1.5"
            />
            <path
              id="Line"
              d="M36.3275 15.9793H38.097L36.8664 14.7077L25.7875 3.25944L24.4985 1.92752V3.78101V15.2293V15.9793H25.2485H36.3275Z"
              stroke="#E6E6E6"
              stroke-width="1.5"
            />
            <path id="Line Copy" d="M4.77734 21.5039H30.7556" stroke="#E6E6E6" stroke-width="2" />
            <path id="Line Copy 6" d="M4.77734 16.0508H15.6958" stroke="#E6E6E6" stroke-width="4" />
            <path id="Line Copy 2" d="M4.77734 26.2754H30.7556" stroke="#E6E6E6" stroke-width="2" />
          </g>
        </svg>
        <p className={styles.errormessage}>
          Не удалось загрузить данные. Проверьте подключение к интернету или обновите страницу
        </p>
      </div>
    );
  };

  renderContent = () => {
    const { items, onSelect } = this.props;
    return items.map((item, index) => {
      const { user, troubles, calls, deals } = item;
      return (
        <tr key={index} className={styles.bottomborder} onClick={this.onClick(user.id)}>
          <td className={styles.manager}>
            {user.avatar ? (
              <img src={user.avatar} className={styles.avatar} />
            ) : (
              <div className={styles.graycircle}></div>
            )}
            {troubles.totalCount < 1 ? null : <span className={styles.troubles}>{troubles.totalCount}</span>}
            {this.shortenName(user.visibleName)}
          </td>
          <td className={styles.calls}>
            {calls.factCallsCount}
            <span className={styles.graytext}>{` / ${calls.planCallsCount}`}</span>
          </td>
          <td>{calls.outgoingTalksCount}</td>
          <td>{calls.incomingTalksCount}</td>
          <td>{this.msToTime(calls.spentTime)}</td>
          <td>{deals.newDealsCount}</td>
          <td>{deals.declinedCount}</td>
          <td className={styles.floatright}>{deals.billsSum.toLocaleString('ru-RU')}</td>
          <td className={styles.floatleft}>
            <span className={styles.count}>{deals.billsCount}</span>
          </td>
          <td className={styles.floatright}>{deals.paidSum.toLocaleString('ru-RU')} </td>
          <td className={styles.floatleft}>
            <span className={styles.count}>{deals.paidCount}</span>
          </td>
          <td className={styles.summarymonth}> {deals.monthFactSum.toLocaleString('ru-RU')}</td>
          <td className={styles.floatright}>
            <span className={styles.count}>{`${this.calcPercent(deals.monthPlanSum, deals.monthFactSum)}%`}</span>
          </td>
        </tr>
      );
    });
  };

  renderSummaryLine = (summaryMs: number, summaryMonthFact: number, summaryMonthPlan: number) => {
    return (
      <tr className={styles.summaryline}>
        <td className={styles.summarytitle}>Всего</td>
        <td className={styles.calls}>
          {this.calcSummary('calls', 'factCallsCount')}{' '}
          <span className={styles.graytext}>{`/ ${this.calcSummary('calls', 'planCallsCount')}`}</span>
        </td>
        <td>{this.calcSummary('calls', 'outgoingTalksCount')} </td>
        <td>{this.calcSummary('calls', 'incomingTalksCount')} </td>
        <td>{this.msToTime(summaryMs)}</td>
        <td>{this.calcSummary('deals', 'newDealsCount')} </td>
        <td>{this.calcSummary('deals', 'declinedCount')} </td>
        <td className={styles.floatright}>{this.calcSummary('deals', 'billsSum').toLocaleString('ru-RU')}</td>
        <td className={styles.floatleft}>
          <span className={styles.count}>{this.calcSummary('deals', 'billsCount')}</span>
        </td>
        <td className={styles.floatright}>{this.calcSummary('deals', 'paidSum').toLocaleString('ru-RU')}</td>
        <td className={styles.floatleft}>
          <span className={styles.count}>{this.calcSummary('deals', 'paidCount')}</span>
        </td>
        <td className={styles.summarymonth}>{summaryMonthFact.toLocaleString('ru-RU')}</td>
        <td className={styles.floatright}>
          <span className={styles.count}>{`${this.calcPercent(summaryMonthPlan, summaryMonthFact)}%`}</span>
        </td>
      </tr>
    );
  };

  public render() {
    const { isLoading, items } = this.props;
    const summaryMs = this.calcSummary('calls', 'spentTime');
    const summaryMonthFact = this.calcSummary('deals', 'monthFactSum');
    const summaryMonthPlan = this.calcSummary('deals', 'monthPlanSum');
    return (
      <>
        <table className={styles.table}>
          {this.renderHeader()}
          {items.length > 0 && !isLoading && this.renderContent()}
          {!isLoading && items.length > 0 && this.renderSummaryLine(summaryMs, summaryMonthFact, summaryMonthPlan)}
        </table>
        {isLoading && this.renderLoading()}
        {!isLoading && items.length === 0 && this.renderError()}
      </>
    );
  }
}
