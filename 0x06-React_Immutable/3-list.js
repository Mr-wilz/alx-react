import { List } from 'immutable';

/**
 * Converts an array into an Immutable.js List
 * @param {Array} array - The array to be converted
 * @returns {List} An Immutable List containing the elements of the array
 */

export function getListObject(array) {
  return List(array);
}

/**
 * Adds a new element to an Immutable.js List
 * @param {List} list - The Immutable List to add the element to
 * @param {*} element - The element to add to the list
 * @returns {List} A new Immutable List with the element added
 */

export function addElementToList(list, element) {
  return list.push(element);
}
