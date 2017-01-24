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
