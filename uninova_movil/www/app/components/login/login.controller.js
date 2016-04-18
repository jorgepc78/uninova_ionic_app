(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$ionicHistory', 'Prospecto'];

    function LoginController($state, $ionicLoading, $ionicPopup, $ionicHistory, Prospecto) {

            var vm = this;
            vm.user = {
                email        : '',
                num_registro : ''
            };

            vm.login = login;


            function login() {

                    $ionicLoading.show({
                      template: 'Iniciando sesión'
                    });

                        Prospecto.find({
                            filter: {
                                where: {
                                    and : [
                                    {email: vm.user.email},
                                    {num_registro: vm.user.num_registro}
                                    ]
                                }
                            }
                        })
                        .$promise
                        .then(function(encontrado) {

                            $ionicLoading.hide();

                            if(encontrado.length > 0)
                            {
                                    window.localStorage.removeItem("profile");
                                    
                                    vm.user = {
                                        nombres      : encontrado[0].nombres,
                                        apellidos    : encontrado[0].apellidos,
                                        email        : encontrado[0].email,
                                        carrera      : encontrado[0].carrera,
                                        num_registro : encontrado[0].num_registro
                                    };

                                    window.localStorage.setItem("profile", JSON.stringify(vm.user));

                                    $ionicHistory.nextViewOptions({
                                      disableBack: true
                                    });
                                    $state.go('app.main');                                
                            }
                            else
                            {
                                    var alertPopup = $ionicPopup.alert({
                                        title: 'Login',
                                        template: 'El correo no est&aacute; registrado o el n&uacute;mero de registro no corresponde con el usuario'
                                    });

                            }

                        });
            };
    };

})();