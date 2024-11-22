import { fromJS } from 'immutable';

/**
 *Converts a plain JavaScript object into an Immutable Map
 * @param {Object} object - The JavaScript object to be converted
 * @returns {Map} - Immutable Map representing the object
 */

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

  return mappedObj.getIn(array, undefined);
}
