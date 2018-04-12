
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('Prueba para el servicio de actualizar', () => {
    it('Debe de actualizar el objeto de la base de datos', async() => {
        console.log('user in test  ', user);
        const pagge = await Page.insert({
            page: 'html',
            user:user._id
        });
        console.log('pagge ', pagge);
        const { body:{ pages } } = await agent
            .get('/api/v1/landing-pages')
            .set({ Authorization: `Bearer ${token}` })
            .send({ page: 'page is here' })
            .expect(200);

        assert(pages.length);
    });

    after(async() => {
        await Page.remove();
    });
});
