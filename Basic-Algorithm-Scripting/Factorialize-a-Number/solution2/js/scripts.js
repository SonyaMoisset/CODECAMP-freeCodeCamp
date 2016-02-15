function factorialize(num) {
  // Assign the value num to the variable result
  var result = num;

  // if num = O OR num = 1, the factorial returns 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Set a WHILE loop
  while (num > 1) {
    num--; // decrementation by 1
    result *= num; // equals result * num; (20 = 5 * 4  | 60 = 20 * 3 | 120 = 60 * 2 | 120 = 120 * 1)
  }
  // Return the factorial of the provided number
  return result;
}
