import { useEffect, useContext } from 'react'
import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'

import { AppContext } from '../providers/context';
import getConfig from '../config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

const useConnectNear = () => {
  const { dispatch } = useContext(AppContext);

  const initContract = async () => {
    const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));
  
    const walletConnection = new WalletConnection(near, null);
  
    const contract = await new Contract(walletConnection.account(), nearConfig.contractName ?? '', {
      viewMethods: ['getGreeting'],
      changeMethods: ['setGreeting'],
    });

    return {
      walletConnection,
      contract
    }
  }

  useEffect(() => {
    initContract()
      .then((res) => {
        dispatch({
          type: 'setConnect',
          payload: {
            ...res,
          }
        });
      })
      .catch(() => {
        dispatch({
          type: 'reset',
          payload: {},
        })
      })
  }, []);

}

export default useConnectNear;
