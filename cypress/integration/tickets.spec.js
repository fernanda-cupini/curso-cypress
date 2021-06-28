describe("Tickets", () => {
  beforeEach(() =>
    cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")
  );

  it("fills all the text input fields", () => {
    const firstName = "Fernanda";
    const lastName = "Cupini";

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("fernanda.cupini@gmail.com");
    cy.get("#requests").type("Nothing");
    cy.get("#signature").type(`${firstName} ${lastName}`);
  });

  it("Select to itens", () => {
    cy.get("#ticket-quantity").select("2");
  });

  it.only("Select 'vip' tickte type", () => {
    cy.get("#vip").check();
  });
  it("Has 'ticketsbox' header's heasding", () => {});
});
