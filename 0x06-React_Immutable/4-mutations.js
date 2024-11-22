import { Map } from 'immutable';

/**
 * An Immutable.js Map representing a collection of key-value pairs
 * @type {Map<number, string>}
 */

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

/**
 * A mutated version of the original map where specific values are updated.
 * Uses the withMutations method for optimized updates.
 * @type {Map<number, string>}
 */

export const map2 = map.withMutations((values) => {
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
