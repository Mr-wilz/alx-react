import { Map } from 'immutable';

/**
 * Deeply merges two objects into a single Immutable Map.
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {Map} An Immutable Map
 */
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}