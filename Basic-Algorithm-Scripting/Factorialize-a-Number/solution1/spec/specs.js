describe('factorialize', function() {
  it("should return a number", function() {
    expect(factorialize(5)).to.be.a('number');
  });

  it("it should return 1 for factorial 0", function() {
    expect(factorialize(0)).to.equal(1);
  });

  it("it should return 120 for factorial 5", function() {
    expect(factorialize(5)).to.equal(120);
  });

  it("it should return 3628800 for factorial 10", function() {
    expect(factorialize(10)).to.equal(3628800);
  });

  it("it should return 2432902008176640000 for factorial 20", function() {
    expect(factorialize(20)).to.equal(2432902008176640000);
  });
});
