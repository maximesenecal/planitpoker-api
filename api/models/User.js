/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/

module.exports = {
  attributes: {
    firstName: {
      required: true,
      type: 'STRING'
    },
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
    },

    // One-to-Many relation to Project
    projects: {
      collection: "project",
      via: "owners",
      dominant: true
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
