
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('Prueba para el servicio de actualizar', () => {
    it('Debe de actualizar el objeto de la base de datos', async() => {
        await Page.insert({
            html: 'html',
            user:user._id
        });
        const { body:{ pages } } = await agent
            .get('/api/v1/landing-pages')
            .set({ Authorization: `Bearer ${token}` })
            .send({ html: 'page is here' })
            .expect(200);

        assert(pages.length);
    });

    after(async() => {
        await Page.remove();
    });
});
