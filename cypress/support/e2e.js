/// <reference types="cypress" /> 

import './commands';

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
})

if (Cypress.config("hideXHRInCommandLog")) {
    const app = window.top;
    if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
    )
    {
        const style = app.document.createElement("style");
        style.innerHTML =
        ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");
        app.document.head.appendChild(style);
    }
}