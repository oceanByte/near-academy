export interface AppContextInterface {
  walletConnection: any,
  accountId: string,
  contract: any,
}

const defaultContext = {
  walletConnection: null,
  accountId: '',
  contract: null,
}

export default defaultContext;
