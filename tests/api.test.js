const request = require('supertest');
const { post } = require('../index');
const app = require('../index');

/**
 * Testing get all current endpoint
 */
/*describe('GET /current', () => {
  it('respuesta de city en json', (done) => {
    request(app)
      .get('/current/Glew')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});*/
describe('GET /current/:city', () => {
  it('respuesta de city "current" en json', (done) => {
    request(app)
      .get('/current/Glew')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('respuesta de city "Not Found" en json', (done) => {
    request(app)
      .get('/current/Mordororx')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, function (err) {
        console.log("Not Found")
        done();
      });
  });
});

/**
 * Testing get all forecast endpoint
 */
/*describe('GET /forecast', () => {
  it('respuesta de city "forecast" en json', (done) => {
    request(app)
      .get('/current/Glew')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});*/
describe('GET /forecast/:city', () => {
  it('respuesta de pronostico de 5 dias en json', (done) => {
    request(app)
      .get('/forecast/Glew')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('respuesta de city "Not Found" en json', (done) => {
    request(app)
      .get('/forecast/Mordoror')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, function (err) {
        console.log("Not Found")
        done();
      });
  });
});

/**
 * Testing post location endpoint
 */
/*describe("POST /location", () => {
  it('respuesta con code 201 location creada', done => {
    request(app)
      .post('/location')
      .send({ip: "190.190.67.13"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(err => {
        if(err) return done(err);
        done();
      })
  })
  it('respuesta con code 400 on bad request', done => {
    request(app)
      .post('/location')
      .send({ip: "190.190"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect("invalid query")
      .end(err => {
        if(err) done(err);
        done();
      })
  })
})*/