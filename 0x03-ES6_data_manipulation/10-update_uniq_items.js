// This function returns an updated map for all items with initial quantity at 1.

export default function updateUniqueItems(item) {
  if (Object.getPrototypeOf(item) !== Map.prototype) throw new TypeError('Cannot process');
  item.forEach((quantity, name) => {
    if (quantity === 1) {
      item.set(name, 100);
    }
  });
  return item;
}
