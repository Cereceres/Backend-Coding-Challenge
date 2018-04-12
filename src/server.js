const express = require('express');
const bodyParser = require('body-parser');

const loadingPageRouter = require('./routers/landing-pages');
const authRouter = require('./routers/auth.post');
const pagesRouter = require('./routers/pages');
const jwt = require('express-jwt');
const { jwt:{ secret } } = require('./settings');

const port = process.env.PORT || 3300;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jwt({ secret }).unless({ path: [ '/api/v1/auth' ] }));

app.use('/', pagesRouter);
app.use('/api/v1', authRouter);
app.use('/api/v1', loadingPageRouter);


module.exports = {
    start:() => {
        app.listen(port, () => console.log(`server listen in ${port}`));
        return app;
    }
};
