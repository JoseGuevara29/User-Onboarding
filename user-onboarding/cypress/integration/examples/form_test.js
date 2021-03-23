describe("Test Form", () => {
  const nameInput = () => cy.get('[name="username"]');
  const emailInput = () => cy.get('[name="email"]');
  const passwordInput = () => cy.get('[name="password"]');
  const checkBoxes = () => cy.get(":nth-child(9) > input");
  const submitButton = () => cy.get("button");
  it("makes sure that form is working", () => {
    cy.visit("http://localhost:3000");
    nameInput().type("Jose").should("have.value", "Jose");
    emailInput().type("jose@jose.com");
    passwordInput().type("thisisapassword");
    checkBoxes().check();
    submitButton().click();
  });
});
