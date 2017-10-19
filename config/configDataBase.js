module.exports = {
    uri: `mongodb://localhost`,
    options: {
        useMongoClient: true,
        db: { native_parser: true },
        server: { poolSize: 5 },
        replset: { rs_name: 'tcc' },
        user: '',
        pass: '',
    },
};
