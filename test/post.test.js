
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('Prueba para el servicio de actualizar', () => {
    it('Debe de actualizar el objeto de la base de datos', async() => {
        await agent
            .post('/api/v1/landing-pages')
            .set({ Authorization: `Bearer ${token}` })
            .send({ page: 'page is here' })
            .expect(200);

        const page = await Page.get({ page: 'page is here' });

        assert(page);
    });

    after(async() => {
        await Page.remove();
    });
});
