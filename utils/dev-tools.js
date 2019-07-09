import React from 'react';
import * as R from 'ramda';

import { initialState } from '../store';
import { objectDiff, objectKeysRecursive } from './object';

export class DevTools extends React.Component {
  componentDidMount() {
    this.devTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__.connect();
    this.devTools.init(initialState);
  }

  shouldComponentUpdate(nextProps) {
    const diff = objectDiff(nextProps.storeState, this.props.storeState);

    if (!R.isEmpty(diff)) {
      const actionName = R.compose(
        R.join('_'),
        R.map(R.toUpper)
      )(objectKeysRecursive(diff));

      this.devTools.send(actionName, nextProps.storeState);
    }

    return false;
  }

  render() {
    return null;
  }
}
