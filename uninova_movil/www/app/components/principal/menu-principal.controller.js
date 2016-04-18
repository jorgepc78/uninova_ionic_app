(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('MenuPrincipalController', MenuPrincipalController);

    MenuPrincipalController.$inject = ['$state'];

    function MenuPrincipalController($state) {

            var vm = this;
            vm.cargaDatosUsuario = cargaDatosUsuario;

            function cargaDatosUsuario() {
		        
		        if(window.localStorage.getItem("profile") == undefined) {
		            $state.go('app.login');
		        } else {
		            $state.go('app.usuario_registrado');
		        }            	
            }
    };

})();