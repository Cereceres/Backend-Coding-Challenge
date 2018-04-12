
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('Test to landing-page post method', () => {
    it('should save the page given', async() => {
        await agent
            .post('/api/v1/landing-pages')
            .set({ Authorization: `Bearer ${token}` })
            .send({ html: 'page is here' })
            .expect(200);

        const page = await Page.get({ page: 'page is here' });

        assert(page);
    });

    after(async() => {
        await Page.remove();
    });
});
