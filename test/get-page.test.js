
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('Prueba para el servicio de actualizar', () => {
    it('Debe de actualizar el objeto de la base de datos', async() => {
        await Page.insert({
            html: `
            <!DOCTYPE html>
            <html>
            <body>
            
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
            
            </body>
            </html> 
            `,
            user: user._id,
            slug: 'slug'
        });
        const { body } = await agent
            .get('/pages/slug')
            .set({ Authorization: `Bearer ${token}` })
            .send({ page: 'page is here' })
            .expect(200);

        assert(body);
    });

    after(async() => {
        await Page.remove();
    });
});
