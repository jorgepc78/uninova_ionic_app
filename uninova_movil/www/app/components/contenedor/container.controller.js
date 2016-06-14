(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('ContainerController', ContainerController);

    ContainerController.$inject = ['$scope', '$state', '$ionicSideMenuDelegate'];

    function ContainerController($scope, $state, $ionicSideMenuDelegate) {

            var vm = this;
            vm.mostrar_opcion_perfil   = false;
            vm.mostrar_opcion_registro = false;

            vm.abre_redes = abre_redes;
            

            $scope.$watch(function () {
                if($ionicSideMenuDelegate.isOpen()) {
                    vm.usuario = JSON.parse(window.localStorage.getItem("profile"));
                    if(vm.usuario !== null)
                    {
                        vm.mostrar_opcion_perfil   = true;
                        vm.mostrar_opcion_registro = false;
                    }
                    else
                    {
                        vm.mostrar_opcion_perfil   = false;
                        vm.mostrar_opcion_registro = true;
                    }
                }
            });


            inicia();

            function inicia() {
            }

            function abre_redes(tipoRed) {
                if(tipoRed == 'facebook')
                    window.open("https://www.facebook.com/Uninova-Universidad-280773085595072/?fref=ts", '_system');
                else if(tipoRed == 'instagram')
                    window.open("https://www.instagram.com/uninovauniversidad/", '_system');
            }

    };

})();