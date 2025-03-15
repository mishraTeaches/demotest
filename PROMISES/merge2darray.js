function mergeArrays(nums1, nums2) {
  // Create a Map to store ids and their summed values
  const map = new Map();

  // Add all ids and values from nums1 to the Map
  for (const [id, val] of nums1) {
    map.set(id, val);
  }

  // Add all ids and values from nums2 to the Map
  for (const [id, val] of nums2) {
    if (map.has(id)) {
      // If the id already exists, add the value to the existing value
      map.set(id, map.get(id) + val);
    } else {
      // If the id does not exist, add it with the value from nums2
      map.set(id, val);
    }
  }

  // Convert the Map to an array of [id, value] pairs
  const result = Array.from(map);

  // Sort the result by id in ascending order
  result.sort((a, b) => a[0] - b[0]);

  // Return the sorted result
  return result;
}

// Example usage
const nums1 = [
  [1, 3],
  [2, 2],
  [5, 10],
];

const nums2 = [
  [2, 4],
  [3, 1],
  [5, 5],
];

console.log(mergeArrays(nums1, nums2));
