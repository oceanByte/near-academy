import React, { createContext, useReducer } from 'react';

import defaultContext, { AppContextInterface } from './defaultContent';

const AppContext:any = createContext<AppContextInterface | null>(null);

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'setConnect': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'reset':
      return defaultContext;

    default: {
      throw new Error('No action');
    }
  }
};

const AppContextProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
