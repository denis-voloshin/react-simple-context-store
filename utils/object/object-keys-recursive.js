import * as R from 'ramda';

export const objectKeysRecursive = object => {
  const keys = [];

  const key = R.compose(R.head, R.keys)(object);

  if (R.compose(R.equals('Undefined'), R.type)(key)) {
    return keys;
  }

  keys.push(key);

  if (R.compose(R.equals('Object'), R.type)(R.prop(key, object))) {
    keys.push(...objectKeysRecursive(R.prop(key, object)));
  }

  return keys;
};
