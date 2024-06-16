describe("click confirm", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="main"]').click();
    cy.get('[data-cy="write"]').click();
    cy.get('[data-cy="title"]').type("제목 테스트");
    cy.get('[data-cy="content"]').type("글 테스트");
  });
});
