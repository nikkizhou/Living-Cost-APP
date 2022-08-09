import clone from 'clone'

const reducer = (state, action) => {
  console.log(state,'state in store');
  console.log(action, 'action in store');
  
  switch (action.type) {
    case 'addCityData': {
      return [...state, action.payload];
    }
    case 'moveOneToEnd': {
      const newAllCityData = clone(state);
      const index = newAllCityData.findIndex(d => d.city === action.payload);
      newAllCityData.push(newAllCityData.splice(index, 1)[0]);
      return newAllCityData;
    }
    
    default:
      return state;
  }
};

export { reducer };
