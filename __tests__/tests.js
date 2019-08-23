const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig.js');

describe('Routes', () => {
    beforeEach(async () => {
        // guarantees that the table is cleaned out before any of the tests run
        await db('characters').truncate();
      });
  describe('GET /api/characters', () => {
    it('should return array of characters', () => {
      return request(server)
        .get('/api/characters')
        .then(response => {
          expect(response).toHaveProperty('type', 'application/json');
        })
        // .catch(err => {
        //   console.log("Here is my error", err)
        // });
    });
  });

  describe('POST /api/characters', () => {
    it('should send a status code code 200', () => {
      return request(server)
        .post('/api/characters')
        .send({ name: 'Chaz', hometown: 'Vernon' })
        .then(response => {
          expect(response).toHaveProperty('status', 200);
        })
        // .catch(err=> {
        //   console.log("Here is my error", err)
        // })
    });
  });

});