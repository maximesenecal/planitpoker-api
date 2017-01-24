/**
 * Project.js
 *
 * @description :: Les projets dans lesquels les utilisateurs sont membres et les rooms associées à ce projet
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: "string",
  		required: true
  	},
  	room:{
  		collection: 'room',
  		via: 'project'
  	},

    // Reference to User
    owners: {
     collection: 'user',
     via: 'projects'
    }
  }
}
