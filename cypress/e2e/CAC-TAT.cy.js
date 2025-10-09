describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html') 
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') //verifica titulo do site
  })

  it('inserindo primeiro nome', () =>{
    cy.get('#firstName')
      .as('primeiro_nome')
      .should('be.visible')
      .type('Angela')

    cy.get('@primeiro_nome')
      .should('have.value','Angela')
  })

  it('inserindo segundo nome',() =>{
    cy.get('#lastName')
      .as('segundo_nome')
      .should('be.visible')
      .type('Candido')
    cy.get('@segundo_nome')
      .invoke('val')
      .then((val) => {
        expect(val.toLowerCase()).to.eq('candido')
      }) // <- fechou o .then aqui
  })

  it('mensagem de erro com email invalido',() =>{
    cy.get('#email')
    .should('be.visible')
    .type('Angelateste@gmail')
    
    cy.get('button[type="submit"]')
    .click()
  })

  it('inserir numero',() =>{
    cy.get('#phone')
    .should('be.visible')
    .type('asd@$#%R')
    .should('have.value', '')
    //.type('83 9 87334784')
    //cy.get('#phone')
    //.should('have.value','83987334784')
  })

  it('selecionar o produto',() =>{
    cy.get('#product')
    .select('Mentoria')
    //cy.get('#product')
    .invoke('val')
    .then((val) => {
      expect(val.toLowerCase()).to.eq('mentoria')
    }) // <- fechou o .then aqui
  })

  it('selecionar tipo de atendimento', () =>{
    cy.get('input[type="radio"][value="elogio"]')
    .check()
    .should('be.checked')
  })

  it('selecionar meio de contato', () =>{
    cy.get('input[type="checkbox"][value="email"]')
    .check()
    .should('be.checked')
  })

  it('texto de como deseja a ajuda', () =>{
    const longText = Cypress._.repeat('Esse é um texto bem grande que eu quero digitar rapidão no campo!',5)
    cy.get('#open-text-area')
    .type(longText, { delay: 0})
  })

  it('enviar formulario', () =>{
    cy.get('button[type="submit"]')
    .click()
    
    cy.get('.error')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!');
  })

  it('inserir e apagar dados preenchidos(nome, sobrenome e email)',() => {

    cy.get('#firstName')
      .as('primeiro_nome')
      .should('be.visible')
      .type('Angela')

    cy.get('@primeiro_nome')
      .should('have.value','Angela')
      .clear()
      .should('have.value','')

    cy.get('#lastName')
      .as('segundo_nome')
      .should('be.visible')
      .type('Candido')
    cy.get('@segundo_nome')
      .invoke('val')
      .then((val) => {
        expect(val.toLowerCase()).to.eq('candido')
      })
      cy.get('@segundo_nome')
      .clear()
      .should('have.value','')  
  })

  it('testando comando customizado',() =>{
    const data = {
      firstName: 'Angela',
      lastName: 'Francielly Candido Da Silva',
      email: 'angela@gmail.com',
      phone: '83986293504',
      text: 'Testando variavel'
    }
    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('button[type="submit"]').click()

    cy.get('.success')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('Esse é um texto bem grande que eu quero digitar rapidão no campo!',5)

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
    .type('asd@$#%R')
    .should('have.value', '')
    .type('83 9 87334784')
    //cy.get('#phone')
    .should('have.value','83987334784')

    cy.get('#product')
    .select('Mentoria')
    //cy.get('#product')
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
    .type(longText, { delay: 0})

    cy.get('button[type="submit"]')
    .click()
    
    cy.get('.success')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
  }) // <- fechou o it aqui

  it('Envia o formulário com campo email invalido', () => {
    const longText = Cypress._.repeat('Esse é um texto bem grande que eu quero digitar rapidão no campo!',5)

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
    .type('Angelateste@gmail,com')
    
    cy.get('#phone')
    .should('be.visible')
    .type('asd@$#%R')
    .should('have.value', '')
    .type('83 9 87334784')
    //cy.get('#phone')
    .should('have.value','83987334784')

    cy.get('#product')
    .select('Mentoria')
    //cy.get('#product')
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
    .type(longText, { delay: 0})

    cy.get('button[type="submit"]')
    .click()
    
    cy.get('.error')
    .should('be.visible')
    

  }) // <- fechou o it aqui

  
it('preenche tds os campos e enviar(testando .uncheck) refatorado', () => {
    const longText = Cypress._.repeat('Esse é um texto bem grande que eu quero digitar rapidão no campo!',5)

    cy.get('#firstName')
      .type('Angela')
      .should('have.value','Angela')

    cy.get('#lastName')
      .type('Candido')
      .should('have.value','Candido')

    cy.get('#email')
    .type('Angelateste@gmail.com')
    .should('have.value','Angelateste@gmail.com')

    cy.get('#phone')
    .type('83 9 87334784')
    .should('have.value','83987334784')

    cy.get('#product')
    .select('Mentoria')
    
    cy.get('input[type="radio"][value="elogio"]')
    .check()
    .should('be.checked')

    cy.get('input[type="checkbox"][value="email"]')
    .check()
    .should('be.checked')

    cy.get('input[type="checkbox"][value="phone"]')
    .check()
    .should('be.checked')
    .uncheck()

    cy.get('#open-text-area')
    .type(longText, { delay: 0})

    cy.get('button[type="submit"]')
    .click()
    
    cy.get('.success')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
  }) // <- fechou o it aqui  

  it('marcar amnos checkboxes, depois desmarca o último',()=>{

    cy.get('#check input[type="checkbox"]') //ou cy.get('input[type="checkbox"]').check
      .as('checkboxes')
      .check()

    cy.get('@checkboxes')
      .each(checkbox => {
        expect(checkbox[0].checked).to.equal(true)
      })

    cy.get('@checkboxes')
      .last()
      .uncheck()
    
    cy.get('@checkboxes')                       // pega todos os checkboxes salvos no alias "@checkboxes"
      .each((checkbox, index, list) => {        // percorre cada checkbox encontrado
        if (index === list.length - 1) {        // verifica se o índice atual é o último da lista
        // último tem que estar desmarcado
        expect(checkbox[0].checked).to.equal(false) 
        } else {                                // se não for o último...
        // todos os outros têm que estar marcados
        expect(checkbox[0].checked).to.equal(true)  
    }
  })

  })// <-fechou o it

  it('selecionar arquivo',()=>{

    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
  })//<-fechou o it

it('selecionar um arquivo simulando um drag-and-drop',()=>{//grag-and-drop == arrastar e solta o arquivo no lugar certo

    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
  })//<-fechou o it

  it('adicionar um arquivo utilizando uma fixture para qual foi dada um alias',()=>{

    cy.fixture('example.json').as('sampoFile')
    cy.get('#file-upload')
      .selectFile('@sampoFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
  })//<-fechou o it
  

  it('verifica que a politica de privacidade abre em outra aba',()=>{
    cy.contains('a','Política de Privacidade')
      .should('have.attr', 'href','privacy.html')
      .and('have.attr','target','_blank')

  })
}) // <- fechou o describe aqui
