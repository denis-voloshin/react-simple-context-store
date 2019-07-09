import React from 'react';
import produce from 'immer';
import * as PropTypes from 'prop-types';

import { DevTools } from '../utils/dev-tools';

export const initialState = {
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

export const StoreProvider = ({ children, devTools }) => {
  const [state, modifier] = React.useReducer(produce, initialState);

  return (
    <ModifierContext.Provider value={modifier}>
      <StateContext.Provider value={state}>
        { devTools && <DevTools storeState={state} /> }
        { children }
      </StateContext.Provider>
    </ModifierContext.Provider>
  );
};

StoreProvider.propTypes = {
  devTools: PropTypes.bool,
  children: PropTypes.node.isRequired
};

StoreProvider.defaultProps = {
  devTools: false
};

export const useStore = () => [React.useContext(StateContext), React.useContext(ModifierContext)];
