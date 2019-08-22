import React from 'react';
import { IUser } from '../@types/External';

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
  public render() {
    return 'Make me work!';
  }
}
