function palindrome(str) {
  var regex = str.replace(/[\W_]/g, '').toLowerCase(); // [\W] replaces everything except [^A-Za-z0-9_], so we need to add _ for the last test case. We loweracase to remove any case sensitivity

  var result = regex.split('').reverse().join(''); // chaining methods from Reverse a String algorithm

  return result === regex; // check strict equality to return a Boolean
}
