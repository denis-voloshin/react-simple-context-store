import * as R from 'ramda';

const _diff = (base, object) => {
  const diff = {};

  R.forEachObjIndexed((value, key) => {
    if (!R.equals(value, base[key])) {
      diff[key] = R.type(value) === 'Object' && R.type(base[key]) === 'Object'
        ? _diff(base[key], value)
        : value;
    }
  })(object);

  return diff;
};

export const objectDiff = R.curry(_diff);
