/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	user: {
  		model: 'user',
        required: true,
        unique: false
  	},
  	name:{
  		type: "string",
  		required: true
  	},
  	room:{
  		collection:'room',
  		via:'project'
  	}
  }
};

