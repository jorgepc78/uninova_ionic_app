(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('UsuarioController', UsuarioController);

    UsuarioController.$inject = ['$scope','$state', '$ionicLoading', '$ionicHistory', '$ionicModal', '$ionicSideMenuDelegate', '$cordovaCamera', 'ProspectoService'];

    function UsuarioController($scope, $state, $ionicLoading, $ionicHistory, $ionicModal, $ionicSideMenuDelegate, $cordovaCamera, ProspectoService) {

            var vm = this;
            vm.usuario = {
                id           : '',
                nombres      : '',
                apellidos    : '',
                email        : '',
                carrera      : '',
                fecha_alta   : '',
                foto         : '',
                num_registro : 0
            }
            vm.carrera_alias = '';
            
            vm.listaCarreras = [
                {valor : 'admin',        alias: 'Administración Aduanera'},
                {valor : 'comunicacion', alias: 'Comunicación y Medios de Producción'},
                {valor : 'contaduria',   alias: 'Contaduría y Finanzas'},
                {valor : 'derecho',      alias: 'Derecho y Juicios Orales'},
                {valor : 'diseno',       alias: 'Diseño, Arte y Animación Digital'},
                {valor : 'gestion',      alias: 'Gestión de Empresas'},
                {valor : 'linguistica',  alias: 'lingüística'},
                {valor : 'periodismo',   alias: 'Periodismo'},
                {valor : 'planeacion',   alias: 'Planeación y Evaluación Educativa'},
                {valor : 'urbanismo',    alias: 'Urbanismo Sustentable'}
            ];

            vm.menuizq   = menuizq;
            vm.tomarFoto = tomarFoto;
            vm.guardar = guardar;
            vm.logout = logout;
            
            inicia();

            function inicia() {

                vm.usuario = JSON.parse(window.localStorage.getItem("profile"));
                if(vm.usuario.foto == '' || vm.usuario.foto === undefined)
                    vm.usuario.foto = 'assets/img/no_photo.png'

                var CarreraSeleccionadaIndex = vm.listaCarreras
                                                  .map(function(carrera) {
                                                    return carrera.valor;
                                                  })
                                                  .indexOf(vm.usuario.carrera);

                vm.carrera_alias = vm.listaCarreras[CarreraSeleccionadaIndex].alias;

                $ionicModal.fromTemplateUrl('app/components/usuario/modal-edita-usuario.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal) {
                    vm.modal = modal;
                });

            }

            function menuizq() {
                $ionicSideMenuDelegate.toggleLeft();
            };

            function tomarFoto() {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 150,
                    targetHeight: 150,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    vm.usuario.foto = "data:image/jpeg;base64," + imageData;

                    $ionicLoading.show({
                      template: '<p class="item-icon-left">Actualizando<ion-spinner icon="lines"/></p>'
                    });

                    if(vm.usuario.foto == 'assets/img/no_photo.png')
                        vm.usuario.foto = ''

                    ProspectoService.actualiza(vm.usuario)
                    .success(function (prospecto) {
                            window.localStorage.setItem("profile", JSON.stringify(vm.usuario));

                            if(vm.usuario.foto == '' || vm.usuario.foto === undefined)
                                vm.usuario.foto = 'assets/img/no_photo.png'

                            var CarreraSeleccionadaIndex = vm.listaCarreras
                                                              .map(function(carrera) {
                                                                return carrera.valor;
                                                              })
                                                              .indexOf(vm.usuario.carrera);

                            vm.carrera_alias = vm.listaCarreras[CarreraSeleccionadaIndex].alias;

                            $ionicLoading.hide();
                    })
                    .error(function(data, status, headers, config) {
                        $ionicLoading.hide();
                          if(error.status == 413)
                            alert("El tamaño del archivo de imagen es muy grande");
                    });


                }, function (err) {
                    // An error occured. Show a message to the user
                });
            }


            function guardar() {

                $ionicLoading.show({
                  template: '<p class="item-icon-left">Actualizando<ion-spinner icon="lines"/></p>'
                });

                if(vm.usuario.foto == 'assets/img/no_photo.png')
                    vm.usuario.foto = ''

                ProspectoService.actualiza(vm.usuario)
                .success(function (prospecto) {
                        window.localStorage.setItem("profile", JSON.stringify(vm.usuario));

                        if(vm.usuario.foto == '' || vm.usuario.foto === undefined)
                            vm.usuario.foto = 'assets/img/no_photo.png'

                        var CarreraSeleccionadaIndex = vm.listaCarreras
                                                          .map(function(carrera) {
                                                            return carrera.valor;
                                                          })
                                                          .indexOf(vm.usuario.carrera);

                        vm.carrera_alias = vm.listaCarreras[CarreraSeleccionadaIndex].alias;

                        vm.modal.hide();
                        $ionicLoading.hide();
                })
                .error(function(data, status, headers, config) {
                    $ionicLoading.hide();
                      if(error.status == 413)
                        alert("El tamaño del archivo de imagen es muy grande");
                });

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