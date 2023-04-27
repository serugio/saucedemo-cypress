class BasePage {

    static elementIsVisible(locator: string, timeout: number) {
        cy.get(locator, { timeout: timeout }).should('exist');
        cy.get(locator).should('be.visible');
    }

    static clickElement(locator: string) {
        cy.get(locator).should('exist');
        cy.get(locator).click({ force: true });
    }

    static typeOnInputField(inputData: any, element: string) {

        if (!inputData) {
            cy.get(element).click();
        } else {
            cy.get(element).should('exist');
            cy.get(element).type(inputData);
        }
    }

    static getValueElement(locator: string): string {
        return Cypress.$(locator).attr('value');
    }

    static getTextElement(locator: string): string {
        return Cypress.$(locator).text();
    }
    
}

export default BasePage;