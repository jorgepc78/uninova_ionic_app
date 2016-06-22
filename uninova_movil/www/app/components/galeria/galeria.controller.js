(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('GaleriaController', GaleriaController);

    GaleriaController.$inject = ['$state', '$ionicSideMenuDelegate'];

    function GaleriaController($state, $ionicSideMenuDelegate) {

            var vm = this;

            vm.images = [       
                {src: 'assets/img/galeria/fotos/uninova-galeria1.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria2.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria3.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria4.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria5.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria6.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria7.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria8.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria9.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria10.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria11.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria12.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria13.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria14.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria15.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria16.png', sub: 'Visita y promoción en las escuelas'},
                {src: 'assets/img/galeria/fotos/uninova-galeria17.png', sub: 'Visita y promoción en las escuelas'}
            ];

            vm.menuizq   = menuizq;

            function menuizq() {
                $ionicSideMenuDelegate.toggleLeft();
            };

    };

})();