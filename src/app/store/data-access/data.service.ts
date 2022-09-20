import { ITransaction } from './data.typings';
import * as data from './data.json';

const { total: transactionsTotal } = data;
const { data: transactions } = data;

export const dispatchTable = (arg: string) => {
  return actionsTable[arg]();
};

interface ITableAction {
  [type: string]: () => ITransaction[];
}

//prettier-ignore
const actionsTable: ITableAction = {
  income: () => transactions.filter(transaction => transaction.type === 'income'),
  outcome: () => transactions.filter(transaction => transaction.type === 'outcome'),
  loan: () => transactions.filter(transaction => transaction.type === 'loan'),
  investment: () => transactions.filter(transaction => transaction.type === 'investment'),
};

export const dispatchStatistics = (arg: string) => {
  return actionsStatistics[arg]();
};

interface IStatisticsAction {
  [type: string]: () => string;
}

const statistics = {
  income: transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => (sum += +transaction.amount), 0),
  outcome: transactions
    .filter(transaction => transaction.type === 'outcome')
    .reduce((sum, transaction) => (sum += +transaction.amount), 0),
  loans: transactions
    .filter(transaction => transaction.type === 'loan')
    .reduce((sum, transaction) => (sum += +transaction.amount), 0),
  investments: transactions
    .filter(transaction => transaction.type === 'investment')
    .reduce((sum, transaction) => (sum += +transaction.amount), 0),
  total: transactionsTotal,
};

//prettier-ignore
const actionsStatistics: IStatisticsAction = {
  income: () => String(statistics['income']),
  outcome: () => String(statistics['outcome']),
  loans: () => String(statistics['loans']),
  investments: () => String(statistics['investments']),
  total: () => String(statistics['total']),
};
