describe('Journalist can login and see "Create Article" button', () => {
  context("Successfully", () => {
    before(() => {
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
    });

    it("Journalist can login", () => {
      cy.get('[data-cy="login-form"]').within(() => {
        cy.get('[data-cy="email"]').type("journalist@mail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="button"]').contains("Submit").click();
      });
      cy.get('[data-cy="create-article"]')
        .contains("Create Article")
        .should("be.visible");
    });
  });

  context("Unsuccessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: '{"message": "Invalid credentials"}',
        status: "401",
      });
      cy.visit("/");
    });

    it("invalid credentials", () => {
      cy.get('[data-cy="login-form"]').within(() => {
        cy.get('[data-cy="email"]').type("invalid@mail.com");
        cy.get('[data-cy="password"]').type("wrong_password");
        cy.get('[data-cy="button"]').contains("Submit").click();
      });
      cy.get('[data-cy="create-article"]').should("not.exist");
      cy.get('[data-cy="message"]').should("contain", "Invalid credentials");
    });
  });
});
