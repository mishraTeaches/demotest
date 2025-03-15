function reverseList(head) {
  let prev = null; // Previous node is initially null
  let current = head; // Current node is the head of the list
  let next = null; // Next node is initially null

  // Iterate through the list
  while (current !== null) {
    next = current.next; // Store the next node
    current.next = prev; // Reverse the direction of the current node's next pointer
    prev = current; // Move prev to the current node
    current = next; // Move current to the next node
  }

  return prev; // prev is now the new head of the reversed list
}
