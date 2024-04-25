/// <reference types="cypress"/>

var Context = 0;
var Describe = 0;
var Test = 0;
var Complemento = 0;


context(`${++Context} - Teste de API - Unitário - Portal da Transparência Gov.Br`, () =>
{
    describe('Consulta às licitações na API do Portal da Transparência - Teste Unitário', () => {
        it('Simula a consulta às licitações com os parâmetros fornecidos', () =>
        {
            const codigoOrgao = '52111';
            const dataAberturaInicial = '01/01/2022';
            const dataAberturaFinal = '30/06/2022';

            // URL da API com os parâmetros
            const apiUrl = `https://api.portaldatransparencia.gov.br/api-de-dados/licitacoes/v3/licitacoes?codigoOrgao=${codigoOrgao}&dataAberturaInicial=${dataAberturaInicial}&dataAberturaFinal=${dataAberturaFinal}`;

            cy.request({
                method: 'GET',
                url: apiUrl,
                failOnStatusCode: false
            }).then((response) =>
            {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
                response.body.forEach((licitacao) => {
                    const dataAbertura = new Date(licitacao.dataAbertura);
                    const dataInicial = new Date(dataAberturaInicial);
                    const dataFinal = new Date(dataAberturaFinal);
                    expect(dataAbertura >= dataInicial && dataAbertura <= dataFinal).to.be.true;
                });
            });
        });
    });
});
