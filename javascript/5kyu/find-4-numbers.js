function find4Number(n) {
  const maxA = Math.floor(Math.sqrt(n));
  
  for (let a = maxA; a > 0; a--) {
    let remainingAfterA = n - a * a;
    if (remainingAfterA < 0) continue;
    
    for (let b = a; b > 0; b--) {
      let remainingAfterB = remainingAfterA - b * b;
      if (remainingAfterB < 0) continue;
      
      for (let c = b; c > 0; c--) {
        let remainingAfterC = remainingAfterB - c * c;
        if (remainingAfterC < 0) continue;
        
        let d = Math.sqrt(remainingAfterC);
        if (d > 0 && d <= c && Math.floor(d) === d) {
          return [a, b, c, d];
        }
      }
    }
  }
}
