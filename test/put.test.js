
const assert = require('assert');

const Page = require('../src/models/page.model');
describe('test to landing-page put method', () => {
    it('should update the page given', async() => {
        const page = await Page.insert({
            html: 'html',
            user:user._id
        });
        await agent
            .put(`/api/v1/landing-pages/${page._id}`)
            .set({ Authorization: `Bearer ${token}` })
            .send({ html: 'html updated' })
            .expect(200);
        const pageUpdated = await Page.get({ _id: page._id });
        assert(pageUpdated[0].html === 'html updated');
    });

    after(async() => {
        await Page.remove();
    });
});
