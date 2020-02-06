const AccessControl = require('accesscontrol');

const ac = new AccessControl();

const setGrants = grants => ac.setGrants(grants);

const canAccess = (role, resource, action, possession='any', skipForRole='super_admin') => (req, res, next) => {
  if (role === skipForRole) next();

  try {
    const permission = ac.can(role)[`${action}${capitalize(possession)}`](resource);

    if(!permission.granted) {
      return res.status(401).send('Unauthorized');
    }

    next();
  } catch(err) {
    console.error('Authorization error', err);
    return res.status(401).send('Unauthorized');
  }
};

const capitalize = str => str[0].toUpperCase() + str.substr(1).toLowerCase();

module.exports = {
  setGrants,
  canAccess,
};
