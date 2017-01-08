const { processRequestJwt } = require('./auth/helper')

const authRoutes = require('./auth')
const accountRoutes = require('./accounts')
const messagesRoutes = require('./messages')

const baseRoute = {
  path: '/',
  get: () => ({server: 'OK'})
}

const routes = [
  baseRoute,
  ...authRoutes,
  ...accountRoutes,
  ...messagesRoutes,
];

function addActionsForRoute(route, config) {

  const actionsRequiringAuth = (config.auth && config.auth.required) || [];

  // for get put and post actions
  ['post', 'get', 'put', 'patch', 'delete'].forEach((actionMethod) => {
    const needsAuth = ~actionsRequiringAuth.indexOf(actionMethod);
    // if there's a handler configured for current action

    const returnAction = (action) => {
      return (req, res) => {
        const actionResult = action(req);

        if (actionResult) {
          res.send(actionResult)
        } else {
          next()
        }
      }
    }

    if (config[actionMethod]) {
      if (needsAuth) {
        route[actionMethod](processRequestJwt, returnAction(config[actionMethod]))
      } else {
        route[actionMethod](returnAction(config[actionMethod]))
      }
    }
  })
}

function addRoutesToRouter(router) {
  routes.forEach((routeConfig) => {
    const route = router.route(routeConfig.path);
    addActionsForRoute(route, routeConfig);
  });
}

module.exports = {
  addRoutesToRouter
};
