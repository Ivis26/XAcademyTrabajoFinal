describe("Actividad 15/08", { testIsolation: false }, () => {
  it("Actividad 15/08", () => {
    cy.visit("https://automationintesting.online/");

    // Verifica que la información del hotel esté presente en la página.
    cy.get("p").contains("Shady Meadows B&B");
    cy.get("p").should(
      "contain",
      "The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S"
    );
    cy.get("p").should("contain", "012345678901");
    cy.get("p").should("contain", "fake@fakeemail.com");

    //Asegurate de que haya al menos una imagen visible.
    cy.get('img[alt="Hotel logoUrl"]').should("be.visible");

    //Confirma que el texto de la descripción del hotel sea el esperado.
    cy.get(
      "div#root > div:nth-child(2) > div.container-fluid > div.row:nth-child(2) > div.col-sm-10:nth-child(2) > p"
    )
      .contains(
        "Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place."
      )
      .should("be.visible");

    //Desarrolla al menos dos ejemplos que interactúen con APIs:

    //Ejemplo 1: Validar que la API de branding esté funcionando correctamente.
    cy.request("http://automationintesting.online/branding/").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );

    //Ejemplo 2: Validar que la API de rooms esté funcionando correctamente.
    cy.request("https://automationintesting.online/room/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
