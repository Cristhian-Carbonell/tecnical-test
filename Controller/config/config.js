module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://127.0.0.1:27017/shop',
    server: 'http://localhost',
    SECRET_TOKEN: 'miclavedetokens',
}
