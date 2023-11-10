/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import ChallengingDom from '@support/page/challengingDom';

describe('Testing selectors with click.', () => {
  beforeEach(() => {
    cy.visit(EnvHelper.getValue('urlChallengingDom'));
    cy.wait(500);
  });

  context('Clicking on screen buttons using your class.', () => {
    it('Clicking on the blue button.', () => {
      ChallengingDom.clickOnTheBlueButton();
    });

    it('Clicking on the red button.', () => {
      ChallengingDom.clickOnTheRedButton();
    });

    it('Clicking on the green button.', () => {
      ChallengingDom.clickOnTheGreenButton();
    });
  });

  context('Clicking on screen buttons using your index.', () => {
    it('Clicking on the blue button.', () => {
      ChallengingDom.clickOnTheButtonUsingIndex(1);
    });

    it('Clicking on the red button.', () => {
      ChallengingDom.clickOnTheButtonUsingIndex(2);
    });

    it('Clicking on the green button.', () => {
      ChallengingDom.clickOnTheButtonUsingIndex(3);
    });
  });

  context('Clicking on the grid buttons using the href and index with for loop.', () => {
    it('Clicking all the "edit" buttons.', () => {
      ChallengingDom.clickOnAllTheButtonsEditOrDeleteWithForLoop('edit');
    });

    it('Clicking all the "delete" buttons.', () => {
      ChallengingDom.clickOnAllTheButtonsEditOrDeleteWithForLoop('delete');
    });
  });

  context('Clicking on the grid buttons using multiple.', () => {
    it('Clicking all the "edit" buttons.', () => {
      ChallengingDom.clickOnAllTheButtonsEditOrDeleteWithMultiple('edit');
    });

    it('Clicking all the "delete" buttons.', () => {
      ChallengingDom.clickOnAllTheButtonsEditOrDeleteWithMultiple('delete');
    });
  });
});
