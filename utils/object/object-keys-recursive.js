import * as R from 'ramda';

/**
 * List of object keys recursive
 *
 * @param {Object} object Object to get keys from
 * @return {Array} List of keys
 */
export const objectKeysRecursive = R.curry(function objectKeysRecursive(object) {
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
});
