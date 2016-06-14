(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('MenuPrincipalController', MenuPrincipalController);

    MenuPrincipalController.$inject = ['$scope', '$state','$ionicSideMenuDelegate', '$window', '$timeout'];

    function MenuPrincipalController($scope, $state, $ionicSideMenuDelegate, $window, $timeout) {

            var vm = this;

            $scope.swiper = {};

            vm.muestraDetalleCarrera = muestraDetalleCarrera;
            vm.cargaDatosUsuario     = cargaDatosUsuario;
            vm.menuizq               = menuizq;
            vm.onReadySwiper         = onReadySwiper;

            inicia();
            
            function inicia() {
                $scope.ancho = '100%';
            }

            function onReadySwiper(swiper) {
                swiper.slideTo(window.localStorage.getItem("idxswiper"),0);
                vm.ancho = ($window.innerWidth-1) + 'px';
                $timeout(function() {
                    swiper.update(true);
                    /*$scope.$apply(function () {
                        vm.ancho = $window.innerWidth + 'px';
                    });*/
                }, 500);

                swiper.on('onClick', function (swiper) {
                    window.localStorage.setItem("idxswiper",swiper.activeIndex);
                    $state.go('app.detalle_carrera', { id: swiper.clickedSlide.id });
                });

            };

            function menuizq() {
                $ionicSideMenuDelegate.toggleLeft();
            };

            function muestraDetalleCarrera(carrera) {
                $state.go('app.detalle_carrera', { id: carrera });
            }

            function cargaDatosUsuario() {
		        
		        if(window.localStorage.getItem("profile") == undefined) {
		            $state.go('app.login');
		        } else {
		            $state.go('app.usuario_registrado');
		        }            	
            }
    };

})();