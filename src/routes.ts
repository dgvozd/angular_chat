export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '',
      component: 'app'
    })
    .state('app.login', {
      url: '/login',
      component: 'login'
    })
    .state('app.chat', {
      url: '/chat',
      component: 'chat'
    });
}
