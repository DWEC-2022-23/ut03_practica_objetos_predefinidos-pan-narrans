var expect = chai.expect;
chai.should();

describe("Circle functions", function () {
  describe("#calcularPeriCirculo()", function () {
    it("Should work for positive values.", function () {
      calcularAreaCirculo(1).should.be.equal(3.14);
      calcularAreaCirculo(2).should.be.equal(12.57);
      calcularAreaCirculo(5.165).should.be.equal(83.81);
    });
    it("Should work for zero.", function () {
      calcularAreaCirculo(0).should.be.equal(0);
    });
    it("Should not work for negative values.", function () {
      calcularAreaCirculo(-1).should.be.NaN;
      calcularAreaCirculo(-2).should.be.NaN;
      calcularAreaCirculo(-5.165).should.be.NaN;
    });
  });

  describe("#calcularPeriCirculo()", function () {
    it("Should work for positive values.", function () {
      calcularPeriCirculo(1).should.be.equal(6.28);
      calcularPeriCirculo(2).should.be.equal(12.57);
      calcularPeriCirculo(5.165).should.be.equal(32.45);
    });
    it("Should work for zero.", function () {
      calcularPeriCirculo(0).should.be.equal(0);
    });
    it("Should not work for negative values.", function () {
      calcularPeriCirculo(-1).should.be.NaN;
      calcularPeriCirculo(-2).should.be.NaN;
      calcularPeriCirculo(-5.165).should.be.NaN;
    });
  });
});