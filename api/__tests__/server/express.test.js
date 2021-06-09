import request from 'supertest-as-promised';
import app from '../../server/config/express';

describe('Test the root path -> return 404', () => {
  test('It should response the GET method with 404 message', async () => {
    const response = await request(app).get('/');
    const { success, status, data } = response.body;

    expect(response.statusCode).toBe(404);
    expect(success).toBeFalsy();
    expect(status).toBe(404);
    expect(data).toHaveProperty('msg');
    expect(data.msg).toContain('404');
  });
});


describe('Test the api test path (/api/test) -> return 404', () => {
  test('It should response the GET method with 404 message', async () => {
    const response = await request(app).get('/api/test');
    const { success, status, data } = response.body;

    expect(response.statusCode).toBe(404);
    expect(success).toBeFalsy();
    expect(status).toBe(404);
    expect(data).toHaveProperty('msg');
    expect(data.msg).toContain('404');
  });
});