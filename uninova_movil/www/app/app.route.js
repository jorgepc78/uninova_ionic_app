(function() {
    'use strict';

    angular
        .module('uninova')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicNativeTransitionsProvider'];


    function config($stateProvider, $urlRouterProvider, $ionicNativeTransitionsProvider) {

	    //$ionicNativeTransitionsProvider.enable(false);
	    //$ionicNativeTransitions.enable(true);

	    /*$ionicNativeTransitionsProvider.setDefaultTransition({
	        type: 'slide',
	        direction: 'up',
	        duration: '500'
	    });*/


		$stateProvider

		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'app/shared/layout/container.html'
		})
		.state('app.main', {
			url          : '/main',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/principal/menu-principal.html',
				controller   : 'MenuPrincipalController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.mision', {
			url          : '/mision',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/mision-vision/mision-vision.html',
				controller   : 'MisionVisionController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.oferta', {
			url          : '/oferta',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/oferta-educativa/oferta-principal.html',
				controller   : 'OfertaPrincipalController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.infraestructura', {
			url          : '/infraestructura',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/infraestructura/infraestructura.html',
				controller   : 'InfraestructuraController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.ubicacion', {
			url          : '/ubicacion',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/ubicacion/ubicacion.html',
				controller   : 'UbicacionController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.login', {
			url          : '/login',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/login/login.html',
				controller   : 'LoginController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.registro', {
			url          : '/registro',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/registro/registro.html',
				controller   : 'RegistroController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.usuario_registrado', {
			url          : '/usuario_registrado',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/usuario/datos-usuario.html',
				controller   : 'UsuarioController',
				controllerAs : 'vm'
		      }
		    }
		})


		$urlRouterProvider.otherwise('/app/main');
    }

})();