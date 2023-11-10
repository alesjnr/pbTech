/// <reference types ="cypress"/>
import { EL_CHALLENGING_DOM } from './elements';

class ChallengingDom {
  clickOnTheBlueButton() {
    cy.get(EL_CHALLENGING_DOM.buttonBlue).click();
  }

  clickOnTheRedButton() {
    cy.get(EL_CHALLENGING_DOM.buttonRed).click();
  }

  clickOnTheGreenButton() {
    cy.get(EL_CHALLENGING_DOM.buttonGreen).click();
  }

  clickOnTheButtonUsingIndex(index) {
    cy.get('a').eq(index).click();
  }

  clickOnAllTheButtonsEditOrDeleteWithForLoop(typeButton) {
    cy.get(EL_CHALLENGING_DOM.buttonGrid(typeButton)).then((el) => {
      let totalElements = el.length;
      for (let index = 0; index < totalElements; index++) {
        cy.get(EL_CHALLENGING_DOM.buttonGrid(typeButton)).eq(index).click();
      }
    });
  }

  clickOnAllTheButtonsEditOrDeleteWithMultiple(typeButton) {
    cy.get(EL_CHALLENGING_DOM.buttonGrid(typeButton)).click({ multiple: true });
  }
}

export default new ChallengingDom();
