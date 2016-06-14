(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('OfertaPrincipalController', OfertaPrincipalController);

    OfertaPrincipalController.$inject = ['$state'];

    function OfertaPrincipalController($state) {

            var vm = this;

            vm.regresar = regresar;

            function regresar() {
            	$state.go('app.main');
            };
    };

})();