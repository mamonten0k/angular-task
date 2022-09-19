export interface ITransaction {
  type: string;
  _id: string;
  amount: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface ITransactionsChunk {
  total: number;
  data: ITransaction[];
}
