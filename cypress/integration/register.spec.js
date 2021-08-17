describe("Signup new account", () => {
  beforeEach(() =>
    cy.visit("https://dev.app.bossabox.com/login")
  );

  it("Should Sign up a new User Successfully", () => {
    const fullName = "Fernanda Cupini";
    const password = '!bossaBox123'

    cy.contains('Cadastre-se').click();

    cy.get("#input-fullName").type(fullName);
    cy.get("#input-email").type("fernanda.cupini@gmail.com");
    cy.get("#input-password").type(password);
    cy.get("#input-confirmPassword").type(password);
    cy.get(".checkbox-icon").click();
  });

  it("Should Show a error message when Checkbox is not checked", () => {
    const fullName = "Fernanda Cupini";
    const password = '!bossaBox123'

    cy.contains('Cadastre-se').click();

    cy.get("#input-fullName").type(fullName);
    cy.get("#input-email").type("fernanda.cupini@gmail.com");
    cy.get("#input-password").type(password);
    cy.get("#input-confirmPassword").type(password);

    cy.contains('Cadastrar').click();
    cy.get(".checkbox-icon").click();
    cy.get(".checkbox-icon").click();

    cy.get('.logo').scrollIntoView();

    cy.contains('É necessário aceitar os termos de uso e política de privacidade para prosseguir').should('be.visible');


  });

  it("Should not contains @ in Email", () => {
    const fullName = "Fernanda Cupini";
    const password = '!bossaBox123';

    cy.contains('Cadastre-se').click();

    cy.get("#input-fullName").type(fullName);
    cy.get("#input-email").type("fernanda.cupini");
    cy.get("#input-password").type(password);
    cy.get("#input-confirmPassword").type(password);
    cy.get(".checkbox-icon").click();
    
    cy.contains('Cadastrar').click();
    cy.get('.logo').scrollIntoView();

    cy.contains('E-mail e/ou senha inválidos').should('be.visible');
  });

  it("should not fill a mandatory input", () => {
    const password = '!bossaBox123';

    cy.contains('Cadastre-se').click();

    cy.get("#input-email").type("fernanda.cupini");
    cy.get("#input-password").type(password);
    cy.get("#input-confirmPassword").type(password);
    cy.get(".checkbox-icon").click();
    
    cy.contains('Cadastrar').click();
    cy.get('.logo').scrollIntoView();

    cy.contains('Lembre-se de preencher os campos').should('be.visible');
  });


  it("Passwords must not be the same", () => {
    const fullName = "Fernanda Cupini";
    const password = '!bossaBox123';

    cy.contains('Cadastre-se').click();
    cy.get("#input-fullName").type(fullName);
    cy.get("#input-email").type("fernanda.cupini@teste.com");
    cy.get("#input-password").type(password);
    cy.get("#input-confirmPassword").type("1234");
    cy.get(".checkbox-icon").click();
    
    cy.contains('Cadastrar').click();
    cy.get('.logo').scrollIntoView();

    cy.contains('As senhas não correspondem').should('be.visible');
  });

  it("Passwords must not be strong", () => {
    const fullName = "Fernanda Cupini";
    const password = '123';

    cy.contains('Cadastre-se').click();
    cy.get("#input-fullName").type(fullName);
    cy.get("#input-email").type("fernanda.cupini@teste.com");
    cy.get("#input-password").type(password);
    cy.get("#input-confirmPassword").type("1234");
    cy.get(".checkbox-icon").click();
    
    cy.contains('Cadastrar').click();
    cy.get('.logo').scrollIntoView();

    cy.contains('A senha deve ter pelo menos 8 caracteres').should('be.visible');
  });

});
