import { faker } from '@faker-js/faker';

export const MAIN_PROPERTIES = {
  properties: ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'],
  type: {
    id: 'number',
    name: 'string',
    username: 'string',
    email: 'string',
    address: 'object',
    phone: 'string',
    website: 'string',
    company: 'object'
  }
};

export const ADDRESS_PROPERTIES = {
  properties: ['street', 'suite', 'city', 'zipcode', 'geo'],
  type: {
    street: 'string',
    suite: 'string',
    city: 'string',
    zipcode: 'string',
    geo: 'object'
  }
};

export const GEO_PROPERTIES = {
  properties: ['lat', 'lng'],
  type: {
    lat: 'string',
    lng: 'string'
  }
};

export const COMPANY_PROPERTIES = {
  properties: ['name', 'catchPhrase', 'bs'],
  type: {
    name: 'string',
    catchPhrase: 'string',
    bs: 'string'
  }
};

export const BODY = {
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  address: {
    street: faker.location.streetAddress(),
    suite: faker.location.secondaryAddress(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    geo: {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  },
  phone: faker.phone.number(),
  website: faker.internet.url(),
  company: {
    name: faker.company.name(),
    catchPhrase: faker.company.catchPhrase(),
    bs: faker.company.buzzPhrase()
  }
};
