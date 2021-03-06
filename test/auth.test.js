
const assert = require('assert');

const User = require('../src/models/user.model');
const codeBase64 = require('../src/lib/code-base64');
describe('Test to auth', () => {
    it('should return the token', async() => {
        await User.insert({
            user:'user to auth',
            pass: codeBase64('pass')
        });
        const { body:{ token } } = await agent
            .post('/api/v1/auth')
            .send({
                user: 'user to auth',
                pass: 'pass'
            })
            .expect(200);
        assert(token);
    });

    after(async() => {
        await User.remove({
            user:'user to auth',
            pass: codeBase64('pass')
        });
    });
});
