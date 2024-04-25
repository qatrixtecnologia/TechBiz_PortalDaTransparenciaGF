/// <reference types="cypress"/>

var Context = 0;
var Describe = 0;
var Test = 0;
var Complemento = 0;


context(`${++Context} - Teste de API - BackEnd - Portal da Transparência Gov.Br`, () =>
{
    describe(`Cenário ${++Describe} - Consultas de Licitações - Período de Até 6 Meses.`, () =>
    {
        const codigoOrgao = '52111';
        const dataAberturaInicial = '01/01/2022';
        const dataAberturaFinal = '30/06/2022';
        const url = `https://api.portaldatransparencia.gov.br/api-de-dados/licitacoes/v3/licitacoes?` + `codigoOrgao=${codigoOrgao}&dataAberturaInicial=${dataAberturaInicial}&dataAberturaFinal=${dataAberturaFinal}`;

        it(`Teste ${++Test}.${++Complemento} - Consultas de Licitações - Status 200`, () =>
        {
            cy.request({
                method: 'GET',
                url: url,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(200);
                cy.writeFile('cypress/fixtures/licitacoes.json', response.body);
                cy.log('Consulta realizada com sucesso. Dados salvos em licitacoes.json.');
            });
        });

        it(`Teste ${++Test}.${++Complemento} - Consultas de Licitações - últimos 30 dias`, () =>
        {
            cy.request({
                method: 'GET',
                url: 'http://www.portaldatransparencia.gov.br/api-de-dados/licitacoes',
                body: {
                    "dataInicial": "01/04/2024",
                    "dataFinal": "30/04/2024",
                    "codigoOrgao": "",
                    "pagina": "1"
                }
                }).then((buscaResponse) =>
                {
                    expect(buscaResponse.status).to.equal(200);
                })
        })

        it(`Teste ${Test}.${++Complemento} - Consultas de Licitações - últimos 45 dias`, () =>
        {
            cy.request({
                method: 'GET',
                url: 'http://www.portaldatransparencia.gov.br/api-de-dados/licitacoes',
                body: {
                    "dataInicial": "15/03/2024",
                    "dataFinal": "30/04/2024",
                    "codigoOrgao": "",
                    "pagina": "1"
                }
                }).then((buscaResponse) =>
                {
                    expect(buscaResponse.status).to.equal(200);
                })
        })

        it(`Teste ${Test}.${++Complemento} - Consultas de Licitações - últimos 60 dias`, () =>
        {
            cy.request({
                method: 'GET',
                url: 'http://www.portaldatransparencia.gov.br/api-de-dados/licitacoes',
                body: {
                    "dataInicial": "01/03/2024",
                    "dataFinal": "30/04/2024",
                    "codigoOrgao": "",
                    "pagina": "1"
                }
                }).then((buscaResponse) =>
                {
                    expect(buscaResponse.status).to.equal(200);
                })
        })

        it(`Teste ${Test}.${++Complemento} - Consultas de Licitações - últimos 75 dias`, () =>
        {
            cy.request({
                method: 'GET',
                url: 'http://www.portaldatransparencia.gov.br/api-de-dados/licitacoes',
                body: {
                    "dataInicial": "15/02/2024",
                    "dataFinal": "30/04/2024",
                    "codigoOrgao": "",
                    "pagina": "1"
                }
                }).then((buscaResponse) =>
                {
                    expect(buscaResponse.status).to.equal(200);
                })
        })

        it(`Teste ${Test}.${++Complemento} - Consultas de Licitações - últimos 90 dias`, () =>
        {
            cy.request({
                method: 'GET',
                url: 'http://www.portaldatransparencia.gov.br/api-de-dados/licitacoes',
                body: {
                    "dataInicial": "01/02/2024",
                    "dataFinal": "30/04/2024",
                    "codigoOrgao": "",
                    "pagina": "1"
                }
                }).then((buscaResponse) =>
                {
                    expect(buscaResponse.status).to.equal(200);
                })
        })
    })
})