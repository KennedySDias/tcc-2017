export default mongoose => mongoose.model('users', new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
}))