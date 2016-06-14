(function() {
    'use strict';

    angular
        .module('uninova')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicNativeTransitionsProvider', 'ionGalleryConfigProvider'];


    function config($stateProvider, $urlRouterProvider, $ionicNativeTransitionsProvider, ionGalleryConfigProvider) {

	    //$ionicNativeTransitionsProvider.enable(false);
	    //$ionicNativeTransitions.enable(true);

	    /*$ionicNativeTransitionsProvider.setDefaultTransition({
	        type: 'slide',
	        direction: 'up',
	        duration: '500'
	    });*/

		ionGalleryConfigProvider.setGalleryConfig({
                  action_label: 'Cerrar',
                  toggle: false,
                  row_size: 2,
                  fixed_row_size: true
		});

		$stateProvider

		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'app/components/contenedor/container.html',
			controller : 'ContainerController',
			controllerAs : 'vm'
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
		.state('app.detalle_carrera', {
			url          : '/detalle_carrera:/:id',
		    nativeTransitions: {
		        "type": "slide",
		        "direction": "up"
		    },
		    views: {
		      'main': {
		        templateUrl  : 'app/components/oferta-educativa/detalle-oferta.html',
				controller   : 'DetalleOfertaController',
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
		.state('app.perfil_usuario', {
			url          : '/perfil_usuario',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/usuario/datos-usuario.html',
				controller   : 'UsuarioController',
				controllerAs : 'vm'
		      }
		    }
		})
		.state('app.galeria', {
			url          : '/galeria',
		    views: {
		      'main': {
		        templateUrl  : 'app/components/galeria/galeria.html',
				controller   : 'GaleriaController',
				controllerAs : 'vm'
		      }
		    }
		})

		$urlRouterProvider.otherwise('/app/main');
    }

})();