var expect = chai.expect;
chai.should();

describe("Check Reyes Magos", function () {
  describe("Random values", function () {
    it("Should return 87 for the 11th of October.", function () {
      reyesMagos(new Date(2022, 9, 11, 0, 0, 0)).should.be.equal(87);
    });
    it("Should return 5 for the 1st of January.", function () {
      reyesMagos(new Date(2150, 0, 1, 0, 0, 0)).should.be.equal(5);
    });
  });
  describe("Different hours, same day", function () {
    it("Should return 1 for 00:00:01.", function () {
      reyesMagos(new Date(2022, 0, 5, 0, 0, 1)).should.be.equal(1);
    });
    it("Should return 1 for 12:00:00.", function () {
      reyesMagos(new Date(2022, 0, 5, 12, 0, 0)).should.be.equal(1);
    });
    it("Should return 1 for 23:25:59.", function () {
      reyesMagos(new Date(2022, 0, 5, 23, 59, 59)).should.be.equal(1);
    });
  });
  describe("Extremes", function () {
    it("Should return 0 for the 6th of January.", function () {
      reyesMagos(new Date(2022, 0, 6, 0, 0, 1)).should.be.equal(0);
    });
    it("Should return 364 for the 7th of January.", function () {
      reyesMagos(new Date(2022, 0, 7, 0, 0, 1)).should.be.equal(364);
    });
  });
  describe("Always checks days up to closest 6th of January", function () {
    it("Should return 4 for '02/01/2020'.", function () {
      reyesMagos(new Date(2020, 0, 2, 0, 0, 1)).should.be.equal(4);
    });
    it("Should return 4 for '02/01/2022'.", function () {
      reyesMagos(new Date(2022, 0, 2, 0, 0, 1)).should.be.equal(4);
    });
    it("Should return 4 for '02/01/2023'.", function () {
      reyesMagos(new Date(2022, 0, 2, 0, 0, 1)).should.be.equal(4);
    });
  });
});