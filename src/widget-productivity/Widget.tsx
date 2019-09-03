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

export class ProductivityWidget extends React.Component<IProductivityWidgetProps, IProductivityWidgetState> {
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

  calcSummary = (key: string, subkey: string) => {
    const { items } = this.props;
    return items.reduce((acc, sum) => acc + (sum[key][subkey] || 0), 0);
  };

  public render() {
    const { isLoading, items, onSelect } = this.props;
    const summaryMs = this.calcSummary('calls', 'spentTime');
    const summaryMonthFact = this.calcSummary('deals', 'monthFactSum');
    const summaryMonthPlan = this.calcSummary('deals', 'monthPlanSum');
    return (
      <table className={styles.table}>
        <tr className={styles.heading}>
          <td className={styles.lefttext}>Менеджер</td>
          <td>
            <Hint text="Количество наборов">Наборы</Hint>
          </td>
          <td>
            <Hint text="Количество исходящих разговоров">Исх</Hint>
          </td>
          <td>
            <Hint text="Количество входящих разговоров">Вх</Hint>
          </td>
          <td>
            <Hint text="Общее время входящих и исходящих разговоров">Время</Hint>
          </td>
          <td>
            <Hint text="Количество новых клиентов, где был хоть один разговор">Новые</Hint>
          </td>
          <td>
            <Hint text="Количество карточек, переведенных в отказ">Отказы</Hint>
          </td>
          <td>
            <Hint text="Сумма и количество выставленных счетов">Счета, ₽</Hint>
          </td>
          <td>
            <Hint text="Сумма и количество оплаченных счетов">Оплаты, ₽</Hint>
          </td>
          <td>
            <Hint text="Общая сумма оплат с начала месяца">Факт месяца, ₽</Hint>
          </td>
        </tr>
        {isLoading ? (
          <>
            <tr>
              <td className={styles.isloading}>
                <div className={styles.greysquare}></div>
                <div className={styles.loadgradient}></div>
              </td>
            </tr>
            <tr>
              <td className={styles.isloading}>
                <div className={styles.greysquare}></div>
                <div className={styles.loadgradient}></div>
              </td>
            </tr>
            <tr>
              <td className={styles.isloading}>
                <div className={styles.greysquare}></div>
                <div className={styles.loadgradient}></div>
              </td>
            </tr>
            <tr>
              <td className={styles.isloading}>
                <div className={styles.greysquare}></div>
                <div className={styles.loadgradient}></div>
              </td>
            </tr>
          </>
        ) : (
          items.map(item => (
            <tr className={styles.bottomborder} onClick={() => onSelect(item.user.id)}>
              <td className={styles.manager}>
                {item.user.avatar ? (
                  <img src={item.user.avatar} className={styles.avatar} />
                ) : (
                  <div className={styles.greysquare}></div>
                )}
                {item.troubles.totalCount < 1 ? null : (
                  <span className={styles.troubles}>{item.troubles.totalCount}</span>
                )}
                {this.shortenName(item.user.visibleName)}
              </td>
              <td>
                {item.calls.factCallsCount} <span className={styles.greytext}>{`/ ${item.calls.planCallsCount}`}</span>
              </td>
              <td>{item.calls.outgoingTalksCount}</td>
              <td>{item.calls.incomingTalksCount}</td>
              <td>{this.msToTime(item.calls.spentTime)}</td>
              <td>{item.deals.newDealsCount}</td>
              <td>{item.deals.declinedCount}</td>
              <td>
                {item.deals.billsSum.toLocaleString('ru-RU')}
                <span className={styles.count}>{item.deals.billsCount}</span>
              </td>
              <td>
                {item.deals.paidSum.toLocaleString('ru-RU')}
                <span className={styles.count}>{item.deals.paidCount}</span>
              </td>
              <td>
                {item.deals.monthFactSum.toLocaleString('ru-RU')}
                <span className={styles.count}>
                  {`${this.calcPercent(item.deals.monthPlanSum, item.deals.monthFactSum)}%`}
                </span>
              </td>
            </tr>
          ))
        )}
        {!isLoading && items.length > 0 && (
          <tr className={styles.summaryline}>
            <td className={styles.summarytitle}>Всего</td>
            <td>
              {this.calcSummary('calls', 'factCallsCount')}{' '}
              <span className={styles.greytext}>{`/ ${this.calcSummary('calls', 'planCallsCount')}`}</span>
            </td>
            <td>{this.calcSummary('calls', 'outgoingTalksCount')} </td>
            <td>{this.calcSummary('calls', 'incomingTalksCount')} </td>
            <td>{this.msToTime(summaryMs)}</td>
            <td>{this.calcSummary('deals', 'newDealsCount')} </td>
            <td>{this.calcSummary('deals', 'declinedCount')} </td>
            <td>
              {this.calcSummary('deals', 'billsSum').toLocaleString('ru-RU')}
              <span className={styles.count}>{this.calcSummary('deals', 'billsCount')}</span>
            </td>
            <td>
              {this.calcSummary('deals', 'paidSum').toLocaleString('ru-RU')}
              <span className={styles.count}>{this.calcSummary('deals', 'paidCount')}</span>
            </td>
            <td>
              {summaryMonthFact.toLocaleString('ru-RU')}
              <span className={styles.count}>{`${this.calcPercent(summaryMonthPlan, summaryMonthFact)}%`}</span>
            </td>
          </tr>
        )}
      </table>
    );
  }
}
