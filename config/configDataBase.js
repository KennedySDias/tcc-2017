export default {
    uri: `mongodb://localhost`,
    options: {
        db: { native_parser: true },
        server: { poolSize: 5 },
        replset: { rs_name: 'tcc' },
        user: '',
        pass: '',
    },
};
