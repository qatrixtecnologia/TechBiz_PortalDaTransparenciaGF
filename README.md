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

3. Instalação do cypress

```markdown
Para realizar a instalação do Cypress é necessário ter o Node.js instalado. Após a instalação e certificação de que estão configurados nas variáveis de ambiente, utilizaremos o terminal de comando para instalação.

1. Abra uma pasta e, utilizando o Visual Studio Code (VsCode), navegue até a mesma.
2. Utilize o comando `npm init --yes` para responder sim a todas as perguntas feitas em um projeto Node.js. Alternativamente, utilize `npm init` para responder detalhes do projeto. Nota: as configurações posteriores podem ser perguntas sem importância para este momento, exceto quando perguntar sobre o "test command", insira `npx cypress open`.
3. Utilize o seguinte comando para instalar o Cypress e suas dependências dentro do projeto:
   ```
   npm install cypress --save --include=dev
   ```
4. Para verificar a versão do Cypress, digite o seguinte comando no prompt de comando:
   ```
   npm -v
   ```
   Isso verificará a versão do Node Package Manager.
   ```
   node -v
   ```
   Isso verificará a versão do Node.js.
5. Para rodar os testes utilizando a interface gráfica do Cypress, utilize o comando:
   ```
   npx cypress open
   ```
   Ou
   ```
   npx cypress run
   ```
6. Para rodar e executar os testes do Cypress em background, utilize o comando:
   ```
   npx cypress run
   ```

Possíveis erros e suas correções:
- Erro: "Could not find a Cypress configuration file in this folder".
  Correção: Utilize o comando `npx cypress open --config-file theNewCypressConfigPath`.
```