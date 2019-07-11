# React Simple Context Store
![](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/3a4ik/react-simple-context-store/master/package.json&label=version&query=$.version&colorB=blue)

[React](https://reactjs.org/) store architecture which uses [React Context API](https://reactjs.org/docs/context.html).

## Installation
Install all required dependencies using
```
npm install
```

## Usage
The `useState()` hook provides the current store state and the modifier function which can be imported from the `store` folder **from the root**:
```javascript
import React from 'react';
import { useStore } from '../../store';

export const MyComponent = () => {
  const [storeState, modifier] = useStore();
  
  const handleInputChange = React.useCallback(
    ({ target }) => {
      // Updating store state
      modifier(state => {
        state.myValue = target.value;
      });
    },
    []
  );
  
  return (
    <div>
      <input
        {/* Getting value from the store state */}
        value={storeState.myValue}
        onChange={handleInputChange}
        type="text"
      />
    </div>
  );
};
```

If you want to set initial store state just modify an `initialState` variable in the `/store/index.js` file:
```javascript
export const initialState = {
  user: {
    firstName: 'Denis',
    lastName: 'Voloshin'
  },
  account: {
    name: 'My account'
  }
};
```

## Debugging
[Redux devtools](https://github.com/zalmoxisus/redux-devtools-extension) extension is supported for debugging store, as well.

Extension is enabled only in the `development` environment but if you want to disable it manually or enable in different condition just set certain condition(s) to the `devTools` prop in the `StoreProvider` component in the `/pages/_app.js` file:
```javascript
// ...

return (
  <Container>
    <StoreProvider devTools={false}>
      <Component {...pageProps} />
    </StoreProvider>
  </Container>
);

// ...
```

### Limitations
Because of asynchronous updating store state [synthetic event](https://reactjs.org/docs/events.html) in handlers will be nullified.

So, if you want to use a value from an input in handlers you should save it to a variable:
```javascript
const [storeState, modifier] = useStore();

const handleInputChange = React.useCallback(
  (e) => {
    const newValue = e.target.value;

    modifier(state => {
      state.myValue = newValue;
    });
  },
  []
);
```
or use [ES6 destructuring](http://es6-features.org/#ParameterContextMatching):
```javascript
const handleInputChange = React.useCallback(
  ({ target }) => {
    modifier(state => {
      state.myValue = target.value;
    });
  },
  []
);
```
