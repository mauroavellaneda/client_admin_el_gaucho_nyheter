describe("Journalist can create article", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login_journalist.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_journalist.json",
      });
      cy.visit("/");
      cy.get('[data-cy="login-form"]').within(() => {
        cy.get('[data-cy="email"]').type("journalist@mail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="button"]').contains("Submit").click();
      });
    });
    it("journalist can successfully create articles", () => {
      cy.get('[data-cy="create-article"]').contains("Create Article").click();
      cy.get('[data-cy="form-article"]').within(() => {
        cy.get('[data-cy="title"]').type("Title");
        cy.get('[data-cy="lead"]').type("Lead");
        cy.get('[data-cy="category"]').click();
        cy.get('[data-cy="category"]').contains("Politics").click();
      });
      cy.get('[data-cy="content"]').type("Content");
      cy.get('[data-cy="save-article"]').contains("Save Article").click();
    });
  });
});
