const supertest = require('supertest');
const server = require('../index');
const User = require('../src/models/user.model');
const Page = require('../src/models/page.model');
const codeBase64 = require('../src/lib/code-base64');
before(async() => {
    const agent = supertest(server.start());
    global.agent = agent;
    const user = await User.insert({
        user:'user',
        pass: codeBase64('pass')
    });
    const { body:{ token } } = await agent
        .post('/api/v1/auth')
        .send({
            user: 'user',
            pass: 'pass'
        })
        .expect(200);
    global.user = user;
    global.token = token;
});

after(async() => {
    await User.remove({});
    await Page.remove({});
});
