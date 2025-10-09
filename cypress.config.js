const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'a4sard', // projectId -> ID do projeto Cypress Dashboard (se estiver usando)
  viewportHeight: 880, // viewportHeight -> define a altura da janela do navegador usada nos testes
  viewportWidth: 1280, // viewportWidth -> define a largura da janela do navegador usada nos testes
  e2e: {
    // baseUrl: 'http://localhost:3000', -> baseUrl -> define a URL base da aplicação para evitar repetir nos testes
    // setupNodeEvents(on, config) { }, -> setupNodeEvents -> usado para configurar plugins e eventos customizados
    // specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', -> specPattern -> define onde ficam os arquivos de teste
    // supportFile: 'cypress/support/e2e.js', -> supportFile -> caminho para o arquivo de suporte (comandos globais)
  }, // e2e -> configurações específicas para testes end-to-end

  // defaultCommandTimeout: 8000, -> tempo padrão (em ms) que o Cypress espera por comandos antes de falhar

  // pageLoadTimeout: 60000, -> tempo limite (em ms) para o carregamento de páginas

  // retries: { runMode: 2, openMode: 0 }, -> retries -> número de vezes que o teste será refeito se falhar

  // video: true, -> video -> ativa ou desativa gravação de vídeo dos testes

  // screenshotsFolder: 'cypress/screenshots', -> screenshotsFolder -> define onde os prints dos testes vão ficar

  // videosFolder: 'cypress/videos', -> videosFolder -> define onde os vídeos dos testes vão ficar

  // chromeWebSecurity: false, -> chromeWebSecurity -> desativa segurança do Chrome (necessário em apps com iframes ou múltiplos domínios)

  // env: { apiUrl: 'https://minha-api.com/v1' }, -> env -> define variáveis de ambiente que podem ser acessadas nos testes com Cypress.env()
})
