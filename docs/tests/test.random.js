var expect = chai.expect;
chai.should();

describe("Random number generator", function () {
  describe("Testing boundaries", function () {
    it("Should be less or equal to its upper bound.", function () {
      for (let i = 0; i < 100; i++)
        calcularAleatorio(0, 10).should.be.at.most(10);
      for (let i = 0; i < 100; i++)
        calcularAleatorio(25, 27).should.be.at.most(27);
    });
    it("Should be equal or bigger than its lower bound.", function () {
      for (let i = 0; i < 100; i++)
        calcularAleatorio(0, 10).should.be.at.least(0);
      for (let i = 0; i < 100; i++)
        calcularAleatorio(5, 6).should.be.at.least(5);
    });
  });

  describe("Testing parameter order", function () {
    it("Should work whether the boundaries are ordered or not", function () {
      for (let i = 0; i < 100; i++)
        calcularAleatorio(10, 0).should.be.at.most(10);
      for (let i = 0; i < 100; i++)
        calcularAleatorio(10, 0).should.be.at.least(0);
    });
  });
});