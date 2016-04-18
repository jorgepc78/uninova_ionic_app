(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('MisionVisionController', MisionVisionController);

    MisionVisionController.$inject = ['$state'];

    function MisionVisionController($state) {

            var vm = this;

            vm.regresar = regresar;

            function regresar() {
            	$state.go('app.main');
            };
    };

})();