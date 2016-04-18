(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('UbicacionController', UbicacionController);

    UbicacionController.$inject = ['$state'];

    function UbicacionController($state) {

            var vm = this;

            inicia();

            function inicia() {
        
            	var myLatlng = new google.maps.LatLng(18.549121, -88.296420);
        
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
            
            };
    };

})();