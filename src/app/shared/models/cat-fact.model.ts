export interface CatFact {
  createdAt: string;
  deleted: boolean;
  source: string;
  ststus: CatFactStatus;
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  user: string;
  '_id': string;
  '__v': number;
}

interface CatFactStatus {
  verified: boolean;
  setCount: 1;
}
