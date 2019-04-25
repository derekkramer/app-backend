const request = require('supertest');

const app = require('../../app');

describe('GET /faq', () => {
  it('Should respond with a 200 status code',
    () => request(app)
      .get('/faq')
      .expect('Content-Type', /json/)
      .expect(200));
});
