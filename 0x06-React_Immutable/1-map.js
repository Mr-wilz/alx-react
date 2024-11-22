import { Map } from 'immutable';

/**
 * Converts a plain JavaScript object to an Immutable.js Map
 * @param {Object} object - The object to convert
 * @returns {Map} An Immutable Map
 */
export default function getImmutableObject(object) {
  return Map(object);
}

