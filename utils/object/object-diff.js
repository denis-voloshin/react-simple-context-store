import * as R from 'ramda';

/**
 * Deep diff between two objects
 *
 * @param {Object} base Compared object
 * @param {Object} object Object to compare with
 * @return {Object} Object that represents the diff
 */
export const objectDiff = R.curry(function objectDiff(base, object) {
  const diff = {};

  R.forEachObjIndexed((value, key) => {
    if (!R.equals(value, base[key])) {
      diff[key] = R.type(value) === 'Object' && R.type(base[key]) === 'Object'
        ? objectDiff(base[key], value)
        : value;
    }
  })(object);

  return diff;
});
