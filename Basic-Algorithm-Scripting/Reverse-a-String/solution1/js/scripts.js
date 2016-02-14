function reverseString(str) {
  // Initialize an empty string to host the new string
  var newString = "";

  // Set FOR loop with (str.length - 1) as the starting point, decrement by 1 after each iteration
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  // Return the reversed string
  return newString;
}
