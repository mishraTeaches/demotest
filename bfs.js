// BFS TRAVERSAL

function bfs(graph) {
  const visited = new Set();
  const result = [];

  // Iterate over all nodes in the graph
  for (let node in graph) {
    const parsedNode = parseInt(node); // Convert node key to a number
    if (!visited.has(parsedNode)) {
      // Start BFS from this node
      const queue = [parsedNode]; // Queue for the current BFS
      visited.add(parsedNode);

      while (queue.length > 0) {
        const current = queue.shift(); // Dequeue the first node
        result.push(current); // Add it to the result

        // Explore all neighbors
        for (let neighb of graph[current]) {
          if (!visited.has(neighb)) {
            visited.add(neighb); // Mark as visited
            queue.push(neighb); // Enqueue the neighbor
          }
        }
      }
    }
  }

  return result;
}

const graph = {
  1: [2, 6], // Node 1 is connected to nodes 2 and 6
  2: [1, 3, 4], // Node 2 is connected to nodes 1, 3, and 4
  3: [2], // Node 3 is connected to node 2
  4: [2], // Node 4 is connected to node 2
  6: [1, 7, 8], // Node 6 is connected to nodes 1, 7, and 8
  7: [6], // Node 7 is connected to node 6
  8: [6, 5], // Node 8 is connected to nodes 6 and 5
  5: [8], // Node 5 is connected to node 8
};

console.log(bfs(graph));
