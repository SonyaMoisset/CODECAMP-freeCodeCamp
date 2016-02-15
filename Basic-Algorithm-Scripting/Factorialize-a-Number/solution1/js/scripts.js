function factorialize(num) {
  // if num is strictly equals to 1, the factorial will return 1
  if (num === 0)
    return 1;

  // else apply the factorial method
  return num * factorialize(num - 1);
}
