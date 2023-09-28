describe("Signup page form and navigation", () => {
  it("Signup page loads correctly", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#main")
      .should("be.visible")
      .within(() => {
        cy.get("form#signup")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("have.length", 4);
            cy.get("button[type='submit']")
              .should("be.visible")
              .should("contain.text", "Submit")
              .should("be.disabled");
          });
      });
  });

  it("User with correct data can navigate to signup/success", () => {
    cy.visit("http://localhost:3000/signup");
    const user = {
      username: "jamesbond",
      email: "j.bond@mi5.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepassword",
    };
    for (let key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled").click();
    cy.url().should("include", "/signup/success");
    cy.get("#signup-success").should("contain.text", "Congratulations");
  });

  it("User with incorrect data can navigate to signup/failure", () => {
    cy.visit("http://localhost:3000/signup");
    const user = {
      username: "jamesbond",
      email: "j.bond@mi5.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepasswor",
    };
    for (let key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled").click();
    cy.url().should("include", "/signup/failure");
    cy.get("#signup-failure").should("contain.text", "An error occurred");
  });
});
