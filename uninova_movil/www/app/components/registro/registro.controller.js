(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('RegistroController', RegistroController);

    RegistroController.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$ionicHistory', 'Prospecto'];

    function RegistroController($state, $ionicLoading, $ionicPopup, $ionicHistory, Prospecto) {

            var vm = this;
            vm.user = {
                nombres   : '',
                apellidos : '',
                email     : '',
                carrera   : '',
                fecha_alta: '',
                num_registro: 0
            }
            
            vm.listaCarreras = [
                {valor: 'derecho', alias: 'Lic. en Derecho'},
                {valor: 'gestion_empresas', alias: 'Lic. en Gestión de empresas'},
                {valor: 'admon_aduanal', alias: 'Lic. en Administración aduanal'}
            ];

            vm.registrarse = registrarse;

            function registrarse() {
            
                    $ionicLoading.show({
                      template: 'Realizando el registro'
                    });

                    Prospecto
                    .create({
                        nombres    : vm.user.nombres,
                        apellidos  : vm.user.apellidos,
                        email      : vm.user.email,
                        carrera    : vm.user.carrera.alias,
                        num_registro: 0,
                        fecha_alta : new Date()
                    })
                    .$promise
                    .then(function(nuevo_prospecto) {
                        $ionicLoading.hide();

                        vm.user = {
                            nombres   : nuevo_prospecto.nombres,
                            apellidos : nuevo_prospecto.apellidos,
                            email     : nuevo_prospecto.email,
                            carrera   : nuevo_prospecto.carrera,
                            num_registro: nuevo_prospecto.num_registro
                        };

                        window.localStorage.setItem("profile", JSON.stringify(vm.user));

                        var alertPopup = $ionicPopup.alert({
                            title: 'Registro realizado',
                            template: 'Se ha enviado un numero de identificacion a tu correo electronico, el cual debes ingresar junto a tu email cuando quieras registrarte de nuevo'
                        });
                        
                        alertPopup.then(function(res) {
                            $ionicHistory.nextViewOptions({
                              disableBack: true
                            });
                            $state.go('app.main');
                        });

                    })
                    .catch(function(error) {
                        $ionicLoading.hide();
                          if(error.status == 413)
                            alert("El tamaño del archivo de imagen es muy grande");
                    });
            }
    };

})();