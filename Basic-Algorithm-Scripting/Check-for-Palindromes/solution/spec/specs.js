describe('palindrome', function() {
  it("should return a boolean", function() {
    expect(palindrome('eye')).to.be.a('boolean');
  });

  it("should return true for 'eye'", function() {
    expect(palindrome('eye')).be.true;
  });

  it("should return true for 'race car'", function() {
    expect(palindrome('race car')).be.true;
  });

  it("should return false for 'not a palindrome'", function() {
    expect(palindrome('not a palindrome')).be.false;
  });

  it("should return true for 'A man, a plan, a canal, Panama'", function() {
    expect(palindrome('A man, a plan, a canal, Panama')).be.true;
  });

  it("should return true for 'never odd or even'", function() {
    expect(palindrome('never odd or even')).be.true;
  });

  it("should return false for 'nope'", function() {
    expect(palindrome('nope')).be.false;
  });

  it("should return false for 'almostomla'", function() {
    expect(palindrome('almostomla')).be.false;
  });

  it("should return true for 'My age is 0, 0 si ega ym.'", function() {
    expect(palindrome('My age is 0, 0 si ega ym.')).be.true;
  });

  it("should return false for '1 eye for of 1 eye.'", function() {
    expect(palindrome('1 eye for of 1 eye.')).be.false;
  });

  it("should return true for '0_0 (: /-\ :) 0-0'", function() {
    expect(palindrome('0_0 (: /-\ :) 0-0')).be.true;
  });

});
