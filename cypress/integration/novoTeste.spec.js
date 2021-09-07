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

    it ("Select two tickets", () => {
      cy.get("#ticket-quantity").select("2");

    });

    it("Select 'vip' ticket type", () =>{
      cy.get("#vip").check();
      
    });

    it("Select 'social media'", () => {
      cy.get("#social-media").check();
    });

    it("Has 'TICKETBOX' header's heading", () =>{
      cy.get("header h1").should("contain","TICKETBOX");
    } )

    it("Alerts on invalid emails", () =>{
      cy.get("#email")
      .as("email")
      .type("fernanda.ccupini-gmal.com");

      cy.get("#email.invalid").should("exist");

      cy.get("#email")
      .clear()
      .type("fernanda.ccupini@gmail.com");

      cy.get("#email.invalid").should("not.exist");


    })
  })
