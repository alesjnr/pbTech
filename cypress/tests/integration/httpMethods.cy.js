/// <reference types ="cypress"/>
import { STATUS, STATUS_TEXT, METHODS } from '@fixtures/dataUtils/api/http';
import {
  ADDRESS_PROPERTIES, BODY, COMPANY_PROPERTIES,
  GEO_PROPERTIES, MAIN_PROPERTIES
} from '@fixtures/dataUtils/api/requestUsers';
import EnvHelper from '@helper/envHelper';

describe('Testing HTTP verbs.', () => {
  it('Requesting the "GET" verb and validating the schema.', () => {
    cy.request(
      METHODS.get,
      EnvHelper.getValue('urlApi')
    ).then((response) => {
      expect(response.status).to.eq(STATUS.sucess);
      expect(response.statusText).to.eq(STATUS_TEXT.sucess);
      expect(response.body).to.have.length.above(0);

      let selectedUser = response.body[0];

      MAIN_PROPERTIES.properties.forEach((property) => {
        expect(selectedUser).to.have.property(property);
        expect(selectedUser[property]).to.not.be.null;
        expect(selectedUser[property]).to.be.a(MAIN_PROPERTIES.type[property]);
      });

      ADDRESS_PROPERTIES.properties.forEach((property) => {
        expect(selectedUser.address).to.have.property(property);
        expect(selectedUser.address[property]).to.not.be.null;
        expect(selectedUser.address[property]).to.be.a(ADDRESS_PROPERTIES.type[property]);
      });

      GEO_PROPERTIES.properties.forEach((property) => {
        expect(selectedUser.address.geo).to.have.property(property);
        expect(selectedUser.address.geo[property]).to.not.be.null;
        expect(selectedUser.address.geo[property]).to.be.a(GEO_PROPERTIES.type[property]);
      });

      COMPANY_PROPERTIES.properties.forEach((property) => {
        expect(selectedUser.company).to.have.property(property);
        expect(selectedUser.company[property]).to.not.be.null;
        expect(selectedUser.company[property]).to.be.a(COMPANY_PROPERTIES.type[property]);
      });
    });
  });

  it('Requesting the "POST" verb and validating the schema.', () => {
    cy.request(
      METHODS.post,
      EnvHelper.getValue('urlApi'),
      BODY
    ).then((response) => {
      expect(response.status).to.eq(STATUS.created);
      expect(response.statusText).to.eq(STATUS_TEXT.created);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.not.be.null;
      expect(response.body.id).to.be.a(MAIN_PROPERTIES.type.id);
      expect(response.body).to.deep.include(BODY);
      expect(response.body.address).to.deep.include(BODY.address);
      expect(response.body.address.geo).to.deep.include(BODY.address.geo);
      expect(response.body.company).to.deep.include(BODY.company);
    });
  });

  it('Requesting the "PUT" verb and validating the schema.', () => {
    cy.request(
      METHODS.put,
      `${EnvHelper.getValue('urlApi')}/1`,
      BODY
    ).then((response) => {
      expect(response.status).to.eq(STATUS.sucess);
      expect(response.statusText).to.eq(STATUS_TEXT.sucess);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.equal(1);
      expect(response.body.id).to.be.a(MAIN_PROPERTIES.type.id);
      expect(response.body).to.deep.include(BODY);
      expect(response.body.address).to.deep.include(BODY.address);
      expect(response.body.address.geo).to.deep.include(BODY.address.geo);
      expect(response.body.company).to.deep.include(BODY.company);
    });
  });

  it('Requesting the "DELETE" verb and validating the schema.', () => {
    cy.request(
      METHODS.delete,
      `${EnvHelper.getValue('urlApi')}/1`
    ).then((response) => {
      expect(response.status).to.eq(STATUS.sucess);
      expect(response.statusText).to.eq(STATUS_TEXT.sucess);
    });
  });
});
