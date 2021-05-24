describe('Testing the question button', () => {
	it('The page should render with no answer text', () => {
		cy.visit('index.html');
		cy.get('#answer').should('be.empty');
	});

	it('Clicking the question button should give the correct answer', () => {
		cy.visit('index.html');
		cy.get('#question').click();
		cy.get('#answer').should('have.text', '42');
	});
});
