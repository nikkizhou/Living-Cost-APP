import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './stateMangement/store.js.js';
import useReducerWithLocalStorage from './useReducerWithLocalStorage.js';

export const StateContext = createContext({});
export const MutationContext = createContext({});

export const ContainerProvider = ({ children }) => {
  const [state, dispatch] = useReducerWithLocalStorage(reducer, []);

  window.rootState = state;

  const methods = {
    addCityData(newData) {
      dispatch({type: 'addCityData', payload: newData});
    },
    moveOneToEnd(cityName) {
      dispatch({ type: 'moveOneToEnd', payload: cityName });
    }
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
