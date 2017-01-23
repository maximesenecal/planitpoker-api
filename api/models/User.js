module.exports = {

    attributes: {
        name: {
            type: 'string',
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        // override default toJSON
        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeUpdate: function (values, next) {
        CipherService.hashPassword(values);
        next();
    },
    beforeCreate: function (values, next) {
        CipherService.hashPassword(values);
        next();
    }

};