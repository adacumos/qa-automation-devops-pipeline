describe("API Tests", () => {

    it("should return healthy status", () => {
      cy.request("http://app:3000/api/health")
        .its("body")
        .should("deep.equal", {
          status: "fail"
        });
    });
  
    it("should return users", () => {
      cy.request("http://app:3000/api/users")
        .its("body")
        .should("have.length", 2);
    });
  
  });