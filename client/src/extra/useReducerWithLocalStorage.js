import { useReducer } from 'react';
import useLocalStorage from '../useLocalStorage.js';

function useReducerWithLocalStorage(reducer,defaultState) {
  const [allCityData, setAllCityData] = useLocalStorage('cityData', defaultState);

  return useReducer(
    (state, action) => {
      const newState = reducer(state, action);
      setAllCityData(newState);
      console.log(newState,'newState in useReducerWithLc');
      return newState;
    },
    { ...allCityData }
  );
}

export default useReducerWithLocalStorage;
