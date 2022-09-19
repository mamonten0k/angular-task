import { ITransaction } from './data.typings';
import * as data from './data.json';

const { total: transactionsTotal } = data;
const { data: transactions } = data;

export const dispatch = (arg: string) => {
  return actions[arg]();
};

interface IAction {
  [type: string]: () => ITransaction[];
}

//prettier-ignore
const actions: IAction = {
  income: () => transactions.filter(transaction => transaction.type === 'income'),
  outcome: () => transactions.filter(transaction => transaction.type === 'outcome'),
  loan: () => transactions.filter(transaction => transaction.type === 'loan'),
  investment: () => transactions.filter(transaction => transaction.type === 'investment'),
};
