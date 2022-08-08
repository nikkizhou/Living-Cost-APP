const defaultState = {
  currentActive: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'currentActive': {
      return { ...state, currentActive: action.payload };
    }
    default:
      throw new Error('mutation type not defined');
  }
};

export { reducer, defaultState };

