import React, { createContext, useContext, useReducer } from 'react';

import { reducer, defaultState } from './store';

export const StateContext = createContext({});
export const MutationContext = createContext({});

export const ContainerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  window.rootState = state;

  const methods = {
    setCurrentActive(account) {
      dispatch({
        type: 'currentActive',
        payload: account,
      });
    },
  };

  return (
    <StateContext.Provider value={state}>
      <MutationContext.Provider value={methods}>
        {children}
      </MutationContext.Provider>
    </StateContext.Provider>
  );
};

export function useGlobalState() {
  return useContext(StateContext);
}

export function useGlobalMutation() {
  return useContext(MutationContext);
}
————————————————
版权声明：本文为CSDN博主「showhand_m」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/a378313814/article/details/112172826
