(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('UsuarioController', UsuarioController);

    UsuarioController.$inject = ['$state', '$ionicHistory'];

    function UsuarioController($state, $ionicHistory) {

            var vm = this;
            vm.logout = logout;
            
            inicia();

            function inicia() {
                
                vm.usuario = JSON.parse(window.localStorage.getItem("profile"));
                if(vm.usuario.foto == '' || vm.usuario.foto === undefined)
                    vm.usuario.foto = 'assets/img/no_photo.png'
            }

            function logout() {		        
                $ionicHistory.nextViewOptions({
                  disableBack: true
                });
		        window.localStorage.removeItem("profile");
                $state.go('app.main');
            }
    };

})();