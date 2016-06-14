(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('RegistroController', RegistroController);

    RegistroController.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$ionicHistory', 'ProspectoService'];

    function RegistroController($state, $ionicLoading, $ionicPopup, $ionicHistory, ProspectoService) {

            var vm = this;
            vm.user = {
                nombres   : '',
                apellidos : '',
                email     : '',
                carrera   : '',
                fecha_alta: '',
                foto      : '',
                num_registro: 0
            }
            
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

            vm.registrarse = registrarse;

            function registrarse() {
            
                    $ionicLoading.show({
                        template: '<p class="item-icon-left">Realizando el registro<ion-spinner icon="lines"/></p>'
                    });

                    ProspectoService.alta(vm.user)
                    .success(function (nuevo_prospecto) {
                            $ionicLoading.hide();

                            if(nuevo_prospecto.id === undefined)
                            {
                                    var alertPopup = $ionicPopup.alert({
                                        title: 'Error',
                                        template: 'No se ha podido realizar el registro por problemas de conexi&oacute;n con el servidor',
                                        okType: 'button-assertive'
                                    });
                            }
                            else
                            {
                                    vm.user = {
                                        id          : nuevo_prospecto.id,
                                        nombres     : nuevo_prospecto.nombres,
                                        apellidos   : nuevo_prospecto.apellidos,
                                        email       : nuevo_prospecto.email,
                                        carrera     : nuevo_prospecto.carrera,
                                        num_registro: nuevo_prospecto.num_registro,
                                        foto        : ''
                                    };

                                    window.localStorage.setItem("profile", JSON.stringify(vm.user));

                                    var alertPopup = $ionicPopup.alert({
                                        title: 'Registro realizado',
                                        template: 'Se ha enviado un n&uacute;mero de identificaci&oacute;n a tu correo electr&oacute;nico, el cual debes ingresar junto a tu email cuando quieras iniciar sesi&oacute;n',
                                        okType: 'button-assertive'
                                    });
                                    
                                    alertPopup.then(function(res) {
                                        $ionicHistory.nextViewOptions({
                                          disableBack: true
                                        });
                                        $state.go('app.main');
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

})();