describe("QA Automation | Trabajo Final", () => {
  beforeEach(() => {
    cy.visit("https://saucedemo.com/");
  });

  it("Compra con user 1", () => {
    //Login con Standard User
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    //Agrego productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    //Hago click en el carrito
    cy.get('[data-test="shopping-cart-link"]').click();

    //Hago click en el boton de checkout
    cy.get('[data-test="checkout"]').click();

    //Completo el formulario
    cy.get('[data-test="firstName"]').type("Ivana");
    cy.get('[data-test="lastName"]').type("Azcona");
    cy.get('[data-test="postalCode"]').type("123456");

    //Hago click en el boton de "Continue""
    cy.get('[data-test="continue"]').click();

    //Hago click en el boton de "Finish"
    cy.get('[data-test="finish"]').click();

    //Verifico que se haya completado la compra
    cy.get("h2").contains("Thank you for your order!").should("be.visible");

    //Realizar el logout
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[id="logout_sidebar_link"]').click();
  });

  it("Compra con user 2", () => {
    //Login con problem_user User
    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    //Agrego productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    //Hago click en el carrito
    cy.get('[data-test="shopping-cart-link"]').click();

    //Hago click en el boton de checkout
    cy.get('[data-test="checkout"]').click();

    //Completo el formulario
    cy.get('[data-test="firstName"]').type("Ivana");
    cy.get('[data-test="lastName"]').type("Azcona");
    cy.get('[data-test="postalCode"]').type("123456");

    //Hago click en el boton de "Continue""
    cy.get('[data-test="continue"]').click();

    //Hago click en el boton de "Finish"
    cy.get('[data-test="finish"]').click();

    //Verifico que se haya completado la compra
    cy.get("h2").contains("Thank you for your order!").should("be.visible");

    //Realizar el logout
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[id="logout_sidebar_link"]').click();
  });
});
