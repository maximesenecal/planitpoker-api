/**
 * Permission.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
   	project: {
   		model: "project",
   		unique: true
   	},
   	user:{
   		model: 'user',
   		unique: true
   	},
    access:{
      enum: ['admin', 'writing', 'editing']
    }
   }
  
 }
