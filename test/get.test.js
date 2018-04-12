
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('Test to landing-page get method', () => {
    it('should return the page saved in DB', async() => {
        await Page.insert({
            html: 'html',
            user:user._id
        });
        const { body:{ pages } } = await agent
            .get('/api/v1/landing-pages')
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);

        assert(pages.length);
    });

    after(async() => {
        await Page.remove();
    });
});
