var expect = chai.expect;
chai.should();

describe("Parse date", function () {
  it("Should return 'Hoy es sábado, 1 de Enero de 2022 y son las 00:00 horas.' for '01/01/2022 00:00'.", function () {
    parseDate(new Date(2022, 0, 1, 0, 0, 0))
      .should.be.equal("Hoy es sábado, 1 de Enero de 2022 y son las 00:00 horas.");
  });
  it("Should return 'Hoy es miércoles, 2 de Abril de 1806 y son las 13:13 horas.' for '03/04/1806 13:13'.", function () {
    parseDate(new Date(1806, 3, 2, 13, 13, 0))
      .should.be.equal("Hoy es miércoles, 2 de Abril de 1806 y son las 13:13 horas.");
  });
});