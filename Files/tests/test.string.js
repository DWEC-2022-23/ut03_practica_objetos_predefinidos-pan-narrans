var expect = chai.expect;
chai.should();

describe("String functions", function () {
  describe("#mitadCar()", function () {
    it("Should return 'ar' string for 'array'' string.", function () {
      mitadCar("array").should.be.equal("ar");
    });
    it("Should return 'fo' string for 'four'' string.", function () {
      mitadCar("four").should.be.equal("fo");
    });
    it("Should work for longer strings.", function () {
      mitadCar("Lorem ipsum dolor si amet.")
        .should.be.equal("Lorem ipsum d");
    });
  });

  describe('#ultimoCaracter()', function () {
    it("Should return '.' for 'Hello.'.", function () {
      ultimoCaracter("Hello.").should.be.equal(".");
    });
    it("Should return 'm' for 'Lorem'.", function () {
      ultimoCaracter("Lorem").should.be.equal("m");
    });
    it("Should return ' ' for 'Lorem '.", function () {
      ultimoCaracter("Lorem ").should.be.equal(" ");
    });
  })

  describe('#cadenaInversa()', function () {
    it("Should return '.olleH' for 'Hello.'.", function () {
      cadenaInversa("Hello.").should.be.equal(".olleH");
    });
    it("Should return 'meroL' for 'Lorem'.", function () {
      cadenaInversa("Lorem").should.be.equal("meroL");
    });
    it("Should return '?doG ees eseeg oD' for 'Do geese see God?'.", function () {
      cadenaInversa("Do geese see God?").should.be.equal("?doG ees eseeg oD");
    });
  })

  describe('#cadenaGuiones()', function () {
    it("Should return 'H-e-l-l-o-.' for 'Hello.'.", function () {
      cadenaGuiones("Hello.").should.be.equal("H-e-l-l-o-.");
    });
    it("Should return 'L-o-r-e-m- -i-p-s-u-m' for 'Lorem ipsum'.", function () {
      cadenaGuiones("Lorem ipsum").should.be.equal("L-o-r-e-m- -i-p-s-u-m");
    });
  })

  describe('#contarVocales()', function () {
    it("Should return 5 for 'aeiou'.", function () {
      contarVocales("aeiou.").should.be.equal(5);
    });
    it("Should return 5 for 'AeIoU'.", function () {
      contarVocales("AeIoU").should.be.equal(5);
    });
    it("Should return 0 for 'My rhythm'.", function () {
      contarVocales("My rhythm").should.be.equal(0);
    });
  })
});
