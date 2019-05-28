const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    },
    clientToken: {
        type: String,
        required: true
    },
    selectedProfile: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
});

ProfileSchema.query.byID = function (_id) {
    return this.where({ _id });
};

module.exports = ProfileSchema;
