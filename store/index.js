import React from 'react';
import produce from 'immer';

const initialState = {
  user: {
    firstName: 'Denis',
    lastName: 'Voloshin'
  },
  account: {
    name: 'My account'
  }
};

const StateContext = React.createContext(initialState);
const ModifierContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, modifier] = React.useReducer(produce, initialState);

  return (
    <ModifierContext.Provider value={modifier}>
      <StateContext.Provider value={state}>
        { children }
      </StateContext.Provider>
    </ModifierContext.Provider>
  );
};

export const useStore = () => [React.useContext(StateContext), React.useContext(ModifierContext)];
