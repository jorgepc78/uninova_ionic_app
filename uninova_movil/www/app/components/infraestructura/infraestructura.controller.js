(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('InfraestructuraController', InfraestructuraController);

    InfraestructuraController.$inject = ['$state'];

    function InfraestructuraController($state) {

            var vm = this;

            vm.regresar = regresar;

            function regresar() {
            	$state.go('app.main');
            };
    };

})();