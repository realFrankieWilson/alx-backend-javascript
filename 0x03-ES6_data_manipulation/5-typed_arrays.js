/**
 * Returns a new ArrayBuffer.
 * @param {number} length - Length of the buffer.
 * @param {number} position - The index position of the value
 * @param {number} value - The value to be added.
 *
 * @returns {ArrayBuffer<Int8Array>} Value at a specific location,
 * returns "Position outside range" error massage if adding value
 * is not possible.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < length) {
    const buffer = new ArrayBuffer(length);
    const newView = new DataView(buffer, 0, length);
    newView.setInt8(position, value);
    return newView;
  }
  throw Error('Position outside range');
}
