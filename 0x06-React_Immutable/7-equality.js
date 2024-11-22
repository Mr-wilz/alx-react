import { is } from 'immutable';

/**
 * Compares two Immutable.js Maps for equality.
 * @param {Map} map1 - The first Immutable Map to compare.
 * @param {Map} map2 - The second Immutable Map to compare.
 * @returns {boolean} `true` if the Maps are deeply equal, `false` otherwise.
 */

export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}