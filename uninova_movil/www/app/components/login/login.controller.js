(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$ionicHistory', '$ionicSideMenuDelegate', 'ProspectoService'];

    function LoginController($state, $ionicLoading, $ionicPopup, $ionicHistory, $ionicSideMenuDelegate, ProspectoService) {

            var vm = this;
            vm.loginUser = {
                email        : '',
                num_registro : ''
            };

            vm.menuizq   = menuizq;
            vm.login     = login;
            vm.obtenerID = obtenerID;


            function menuizq() {
                $ionicSideMenuDelegate.toggleLeft();
            };

            function obtenerID() {
                $ionicPopup.prompt({
                   title: 'Recuperar ID',
                   template: 'Escribe tu E-mail',
                   inputType: 'email',
                   inputPlaceholder: 'E-mail',
                   cancelText: 'Cancelar',
                   okText: 'Aceptar',
                   okType: 'button-assertive'
                 }).then(function(res) {
                    if(res !== undefined)
                    {
                            $ionicLoading.show({
                              template: '<p class="item-icon-left">Enviando mensaje<ion-spinner icon="lines"/></p>'
                            });

                            ProspectoService.recupera(res)
                            .success(function (respuesta) {
                                
                                    $ionicLoading.hide();
                                    if(respuesta.estatus == 1)
                                    {
                                            $ionicPopup.alert({
                                                title: 'Recuperar ID',
                                                template: 'Se ha enviado un email a la direcci&oacute;n <strong>'+res+'</strong> con el ID de registro',
                                                okType: 'button-assertive'
                                            });                        
                                    }
                                    else if(respuesta.estatus == 0)
                                    {
                                            $ionicPopup.alert({
                                                title: 'Email no encontrado',
                                                template: 'El correo no est&aacute; registrado a nin&uacute;n usuario',
                                                okType: 'button-assertive'
                                            });
                                    }
                                    else
                                    {
                                            $ionicPopup.alert({
                                                title: 'Error',
                                                template: 'Error de autentificaci&oacute;n',
                                                okType: 'button-assertive'
                                            });                        
                                    }
                            })
                            .error(function(data, status, headers, config) {
                                    $ionicPopup.alert({
                                        title: 'Error',
                                        template: 'Error de conexi&oacute;n',
                                        okType: 'button-assertive'
                                    });                        
                            });
                    }
                 });
            };

            function login() {

                    if(vm.loginUser.email == '' || vm.loginUser.num_registro == '')
                    {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Login',
                                template: 'Falta ingresar el E-mail o el ID de registro',
                                okType: 'button-assertive'
                            });
                    }
                    else
                    {
                            //window.localStorage.setItem("profile", JSON.stringify({"id":"5704c3af87d15bec31d2a9f1","nombres":"Jorge Iván","apellidos":"Pastrana Conrado","email":"jorgepc78@gmail.com","carrera":"comunicacion","num_registro":0,"foto":""}));

                            $ionicLoading.show({
                              template: '<p class="item-icon-left">Iniciando sesi&oacute;n<ion-spinner icon="lines"/></p>'
                            });

                            ProspectoService.login(vm.loginUser)
                            .success(function (encontrado) {
                                
                                    $ionicLoading.hide();

                                    if(encontrado.length > 0)
                                    {
                                            window.localStorage.removeItem("profile");
                                            
                                            vm.user = {
                                                id           : encontrado[0].id,
                                                nombres      : encontrado[0].nombres,
                                                apellidos    : encontrado[0].apellidos,
                                                email        : encontrado[0].email,
                                                carrera      : encontrado[0].carrera,
                                                foto         : encontrado[0].foto,
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
                                                template: 'El correo no est&aacute; registrado o el n&uacute;mero de registro no corresponde con el usuario',
                                                okType: 'button-assertive'
                                            });

                                    }
                            })
                            .error(function(data, status, headers, config) {
                                $ionicLoading.hide();
                                  if(error.status == 413)
                                    alert("El tamaño del archivo de imagen es muy grande");
                            });
                    }

            };
    };

})();