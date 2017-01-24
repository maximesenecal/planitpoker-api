/**
* UserController
*
* @description :: Server-side logic for managing users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
  findByPseudo: function (req, res) {
    User.findOneByPseudo(req.body.pseudo)
    .done(function (err, user) {
      if (err) res.json({ error: 'oups error' }, 500);
      if (user) {
        res.json(user)
      }
      else {
        res.json({ message: 'User not found' });
      }
    });
  },

  findProjectsByUser: function (req, res) {
    User.findOneById(
      req.param('id')
    )
    .populate('projects')
    .exec(function afterwards(err, user){
      if (err) {
        return res.serverError(err);
      }
      return res.json(user.projects);
    });
  }
};
