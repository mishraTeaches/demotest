function countConnectedComponents(graph) {
  // Create a set to keep track of visited nodes
  const visited = new Set();

  // Initialize the count of connected components to 0
  let count = 0;

  // Iterate over each node in the graph
  for (let node in graph) {
    // Convert the node from string to number (since object keys are strings)
    const currentNode = parseInt(node);

    // If the node hasn't been visited, it's part of a new connected component
    if (!visited.has(currentNode)) {
      // Start DFS from this node to mark all reachable nodes as visited
      dfs(currentNode, graph, visited);

      // Increment the count of connected components
      count++;
    }
  }

  // Return the total number of connected components
  return count;
}

function dfs(node, graph, visited) {
  // Mark the current node as visited
  visited.add(node);

  // Iterate over all neighbors of the current node
  for (let neighbor of graph[node]) {
    // If the neighbor hasn't been visited, recursively call DFS on it
    if (!visited.has(neighbor)) {
      dfs(neighbor, graph, visited);
    }
  }
}

// Example usage
const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1],
  3: [4],
  4: [3],
  5: [],
};

console.log(countConnectedComponents(graph)); // Output: 3
