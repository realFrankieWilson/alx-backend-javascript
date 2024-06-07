import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with specified sizes.
 * @returns: An array of ClassRooms objs.
*/

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
