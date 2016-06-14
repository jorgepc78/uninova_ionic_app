(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('UbicacionController', UbicacionController);

    UbicacionController.$inject = ['$state', '$ionicSideMenuDelegate'];

    function UbicacionController($state, $ionicSideMenuDelegate) {

            var vm = this;
            vm.menuizq   = menuizq;

            inicia();

            function inicia() {
        
            	var myLatlng = new google.maps.LatLng(18.547879, -88.296309);
        
                var mapOptions = {
                  center: myLatlng,
                  zoom: 13,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("map"),  mapOptions);

                var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: 'Uninova'
                });

                vm.map = map;
                google.maps.event.trigger(vm.map,'resize');
            
            };

            function menuizq() {
                $ionicSideMenuDelegate.toggleLeft();
            };
    };

})();