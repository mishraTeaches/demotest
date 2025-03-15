// function dfsIterative(graph) {
//   const visited = new Set();
//   const stack = [];
//   const result = [];

//   // Iterate over all nodes in the graph
//   for (let node in graph) {
//     const parsedNode = parseInt(node); // Convert node key to a number
//     if (!visited.has(parsedNode)) {
//       // Start DFS from this node
//       stack.push(parsedNode);
//       visited.add(parsedNode);

//       while (stack.length > 0) {
//         const current = stack.pop(); // Pop the last node (LIFO)
//         result.push(current); // Add it to the result

//         // Explore all neighbors
//         for (let neighb of graph[current]) {
//           if (!visited.has(neighb)) {
//             visited.add(neighb); // Mark as visited
//             stack.push(neighb); // Push the neighbor onto the stack
//           }
//         }
//       }
//     }
//   }

//   return result;
// }

// const graph = {
//   0: [1, 2],
//   1: [0, 2],
//   2: [0, 1],
//   3: [4],
//   4: [3],
//   5: [],
// };

// console.log(dfsIterative(graph)); // Output: [0, 2, 1, 3, 4, 5]

// RECURSIVE

function dfsRecursive(graph) {
  const visited = new Set();
  const result = [];

  // Helper function for recursion
  function dfsHelper(node) {
    if (!visited.has(node)) {
      visited.add(node); // Mark as visited
      result.push(node); // Add to result

      // Explore all neighbors
      for (let neighb of graph[node]) {
        dfsHelper(neighb); // Recursively visit neighbors
      }
    }
  }

  // Iterate over all nodes in the graph
  for (let node in graph) {
    const parsedNode = parseInt(node); // Convert node key to a number
    dfsHelper(parsedNode); // Start DFS from this node
  }

  return result;
}

const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1],
  3: [4],
  4: [3],
  5: [],
};

console.log(dfsRecursive(graph)); // Output: [0, 1, 2, 3, 4, 5]
