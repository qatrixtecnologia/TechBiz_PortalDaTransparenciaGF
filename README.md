# TechBiz_PortalDaTransparenciaGF

1. Utilizando a API REST do Portal da Transparência do Governo Federal (v3), crie um código com a linguagem script de sua preferência que:

   - Consulte todas as licitações em um período de seis meses ou menos de determinado órgão do Poder Executivo Federal, de acordo com seu código no SIAFI;
   - Salve os dados retornados em um único arquivo JSON.

   Os seguintes parâmetros de entrada deverão ser informados e validados:
   - Código do órgão: deve ser um código válido
   - Data de abertura inicial da licitação: deve ser uma data válida
   - Data de abertura final da licitação: deve ser uma data válida, dentro do intervalo máximo de buscas aceito, conforme enunciado do exercício

   [Link Documentação API](https://api.portaldatransparencia.gov.br/swagger-ui/index.html#/)

2. Crie um teste unitário para o código do exercício anterior, simulando a seguinte entrada de dados:
   - Código do Órgão: 52111
   - Data de abertura inicial: 01/01/2022
   - Data de abertura final: 30/06/2022