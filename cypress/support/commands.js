Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'teste',
    lastName: 'da silva junior',
    email: 'teste@gmail.com',
    phone: '83986293504',
    text: 'testing padrão'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.phone)
    cy.get('#product').select('Mentoria').should('have.value', 'mentoria')
    cy.get('input[type="radio"][value="elogio"]').check()
    cy.get('input[type="checkbox"][value="email"]').check()
    cy.get('input[type="checkbox"][value="phone"]').check()
    cy.get('#open-text-area').type(data.text)
})
