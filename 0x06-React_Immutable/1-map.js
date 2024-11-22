import { Map } from 'immutable';

/**
 *Converts a plain JavaScript object into an Immutable Map
 * @param {Object} object - The JavaScript object to be converted
 * @returns {Map} - Immutable Map representing the object
 */

export default function getImmutableObject (object) {
  return Map(object);
}
