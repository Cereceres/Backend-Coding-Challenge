module.exports = {
    jwt:{
        secret: process.env.SECRET_JWT || '9841hr1u3qs9[{sdfd',
        expiresIn: process.env.EXPIRES_ID_JWT || 60 * 60
    }
};
