function queueTime(queue, nTills) {
  // Create a map of Tills and wait time
  const tills = new Map(new Array(nTills).fill(0).map((_, i) => [i, 0]));

  // loop through the queue
  for (let i = 0; i < queue.length; i++) {
    const waitTime = queue[i];

    // find the index till with the fewest minutes
    const minTill = Array.from(tills).sort(([_, a], [__, b]) => a - b)[0][0];

    // add the number
    tills.set(minTill, tills.get(minTill) + waitTime);
  }

  // return the max value of the tils
  return Array.from(tills.values()).sort((a, b) => b - a)[0]
}

