describe('reverseString', function() {
  it("should return a string", function() {
    expect(reverseString('hello')).to.be.a('string');
  });

  it("it should reverse 'hello' to 'olleh'", function() {
    expect(reverseString('hello')).to.equal('olleh');
  });

  it("it should reverse 'Howdy' to 'ydwoH'", function() {
    expect(reverseString('Howdy')).to.equal('ydwoH');
  });

  it("it should reverse 'Greetings from Earth' to 'htraE morf sgniteerG'", function() {
    expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
  });
});
