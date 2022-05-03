describe("tennis e2e", () => {
  // Test avec les méthodes natives de cypress
  it("should render basic behaviour of users", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="link-to-Nadal"]').click();

    cy.get('[data-testid="player-details"]').scrollTo("bottom");

    cy.get('[data-testid="close-icon"]').click();

    cy.get('[data-testid="list-players"]').scrollTo("0, 300px");

    cy.get('[data-testid="link-to-Djokovic"]').click();

    cy.get('[data-testid="player-details"]').scrollTo("bottom");

    cy.get('[data-testid="close-icon"]').click();

    cy.get('input[placeholder="Rechercher un joueur"]').type("Nadal");

    cy.get('[data-testid="link-to-Nadal"]').should("be.visible");

    cy.get('input[placeholder="Rechercher un joueur"]').clear();

    cy.get("input").type("Novak");

    cy.get('[data-testid="link-to-Djokovic"]').should("be.visible");

    cy.get('input[placeholder="Rechercher un joueur"]').clear();
  });

  // Tests avec le package @testing-library/cypress
  it("should render 404 Error", () => {
    cy.visit("http://localhost:3000/unknown/path");

    cy.findByText(/OUT !/i).should("be.visible");
    cy.findByRole("img", { name: /tennis ball out/i }).should("be.visible");
    cy.findByText(/Désolé, cette page n'existe pas/i).should("be.visible");
    cy.findByRole("button", { name: /Retour à la page d'accueil/i }).should(
      "be.visible"
    );
  });

  it("should render 404 Error ans back to home", () => {
    cy.visit("http://localhost:3000/unknown/path");

    cy.findByText(/OUT !/i).should("be.visible");
    cy.findByRole("img", { name: /tennis ball out/i }).should("be.visible");
    cy.findByText(/Désolé, cette page n'existe pas/i).should("be.visible");
    cy.findByRole("button", { name: /Retour à la page d'accueil/i }).should(
      "be.visible"
    );

    cy.findByRole("button", { name: /Retour à la page d'accueil/i }).click();

    cy.findByRole("textbox", { name: /input-search-player/i }).should(
      "be.visible"
    );
  });
});
