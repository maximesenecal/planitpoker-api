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

    // One-to-Many relation to Project
    projects: {
      collection: "project",
      via: "owners",
      dominant: true
    }
  }
};
