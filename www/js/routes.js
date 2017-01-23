angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.online', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/online.html',
        controller: 'onlineCtrl'
      }
    }
  })

  .state('tabsController.quienesSomos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/quienesSomos.html',
        controller: 'quienesSomosCtrl'
      }
    }
  })

  .state('tabsController.programaciN', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciN.html',
        controller: 'programaciNCtrl'
      }
    }
  })

  .state('tabsController.programaciNLunes', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNLunes.html',
        controller: 'programaciNLunesCtrl'
      }
    }
  })

  .state('tabsController.programaciNMartes', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNMartes.html',
        controller: 'programaciNMartesCtrl'
      }
    }
  })

  .state('tabsController.programaciNMiRcoles', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNMiRcoles.html',
        controller: 'programaciNMiRcolesCtrl'
      }
    }
  })

  .state('tabsController.programaciNJueves', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNJueves.html',
        controller: 'programaciNJuevesCtrl'
      }
    }
  })

  .state('tabsController.programaciNViernes', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNViernes.html',
        controller: 'programaciNViernesCtrl'
      }
    }
  })

  .state('tabsController.programaciNSabado', {
    url: '/page16',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNSabado.html',
        controller: 'programaciNSabadoCtrl'
      }
    }
  })

  .state('tabsController.programaciNDomingo', {
    url: '/page17',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNDomingo.html',
        controller: 'programaciNDomingoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});