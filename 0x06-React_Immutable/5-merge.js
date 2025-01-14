import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into a single Immutable List.
 * @param {Array} page1 - The first array to concatenate.
 * @param {Array} page2 - The second array to concatenate.
 * @returns {List} An Immutable List.
 */
export const concatElements = (page1, page2) => List(page1).concat(List(page2));

/**
 * Merges two objects into a single Immutable Map.
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {Map} An Immutable Map
 */
export const mergeElements = (page1, page2) => Map(page1).concat(Map(page2));
