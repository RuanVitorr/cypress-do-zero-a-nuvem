//quantas vezes o teste vai ser rodado
Cypress._.times(3, () => {
    it('verifica que a politica de privacidade de de forma independente',()=>{                            
        cy.visit('./src/privacy.html')
        cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
        cy.contains('p','Talking About Testing').should('be.visible')
        })//<-fechou o it

})
