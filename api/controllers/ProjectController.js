/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/*
	 * Trouver les utilisateurs d'un projet donné /:id
	 * http://vps351058.ovh.net/PlanItPoker/API/issues/3
	 */
	findUsersByProject: function(req, res){
		User.find()
		.populate('projects', {
			where: { id: req.param('id') }
		})
		.exec(function afterwards(err, users){
			if (err) {
				return res.serverError(err);
			}
			return res.json(users);
		});
	},

	/*
	 * Créer un projet test (mock data) pour l'utilisateur id "588622668fbcf60146924b54"
	 */
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
