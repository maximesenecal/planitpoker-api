/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findUsersByProject: function(req, res){
		Project.findOneById(req.param('id'))
		.populate('owners')
		.exec(function afterwards(err, project){
			if (err) {
				return res.serverError(err);
			}
			return res.json(project.owners);
		});
	},

	addUserInProject: function(req, res){
		Project.findOne(req.param('projectid'))
		.exec(function afterwards(err, project){
			if(err){
				return res.serverError(err)
			}
			//TODO: Check with a service if the userid exists
			project.owners.add(req.param('userid'));
			project.save(function(err){
				if (err) {
					return res.serverError(err);
				}
				else {
					return res.json(project);
				}
			});
		});
},

	createMockData: function(req, res) {
		var project = {
			name: req.param('name'),
			owners: req.param('userid')
		};
		Project.create(project)
		.exec(function afterwards(err, project){
			if (err) {
				return res.serverError(err);
			}
			return res.json(project);
		});
	}
};
