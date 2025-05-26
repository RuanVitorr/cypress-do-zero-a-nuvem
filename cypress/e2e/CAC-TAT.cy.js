describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html') 
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') //verifica titulo do site
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName')
      .as('primeiro_nome')
      .should('be.visible')
      .type('Angela')

    cy.get('@primeiro_nome')
      .should('have.value','Angela')

    cy.get('#lastName')
      .as('segundo_nome')
      .should('be.visible')
      .type('Candido')
    cy.get('@segundo_nome')
      .invoke('val')
      .then((val) => {
        expect(val.toLowerCase()).to.eq('candido')
      }) // <- fechou o .then aqui
    
    cy.get('#email')
    .should('be.visible')
    .type('Angelateste@gmail.com')
    cy.get('#email')
    .should('have.value','Angelateste@gmail.com')

    cy.get('#phone')
    .should('be.visible')
    .type('83 9 87334784')
    cy.get('#phone')
    .should('have.value','83987334784')

    cy.get('#product')
    .select('Mentoria')
    cy.get('#product')
    .invoke('val')
    .then((val) => {
      expect(val.toLowerCase()).to.eq('mentoria')
    }) // <- fechou o .then aqui

    cy.get('input[type="radio"][value="elogio"]')
    .check()
    .should('be.checked')

    cy.get('input[type="checkbox"][value="email"]')
    .check()
    .should('be.checked')

    cy.get('#open-text-area')
    .type('testando no github')
    
  }) // <- fechou o it aqui
}) // <- fechou o describe aqui
