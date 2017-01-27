/**
* isAdminProject
* @description :: Policy to verify user's access for a project
*/
module.exports = function isAdmin (req, res, next) {

  var user = req.user.id,
      targetProjectId = req.param('id');

  Permission.findOne({
    project: targetProjectId,
    user: user,
    access: 'admin'
  })
  .exec(function (err, permission){
    if(err){ return res.serverError(err); }

    if(!permission){
      //TODO: return 403 forbidden
      return res.send("User access denied");
    }
    sails.log.debug("User access OK");
    next();
  })
};
