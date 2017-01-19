/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
     findByPseudo: function (req, res) {     sails.log.debug("*******************findByPseudo");     User.findOneByPseudo(req.body.pseudo).done(function (err, user) {       if (err) res.json({ error: 'oups error' }, 500);       if (user) {           res.json(user)       } else {         res.json({ message: 'User not found' });       }     });   }
};

