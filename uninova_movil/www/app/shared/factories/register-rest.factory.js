(function() {
    'use strict';

	angular
	    .module('uninova')
	    .factory('ProspectoService', ProspectoService);

	ProspectoService.$inject = ['$http', '$rootScope', '$stateParams'];

	function ProspectoService($http, $rootScope, $stateParams) {

		  return {
		    login: function (login) {
		      return $http.get('http://universidaduninova.mx/uninova_api/login.php', 
		      	{ 
		      		params: { 
		      			email        : login.email,
		      			num_registro : login.num_registro,
		      			k 			 : 'aAnFBvIBJZk0gS2D5ax4fHvts1zCDsIoDuvNjfUmOCXnCCdblMeZHhmNyofCQLo9'
		      		} 
		      	})
		    },
		    recupera: function (email) {
		      return $http.get('http://universidaduninova.mx/uninova_api/recupera.php', 
		      //return $http.get('http://universidaduninova.mx/uninova_api/recupera.php', 
		      	{ 
		      		params: { 
		      			email        : email,
		      			k 			 : 'KucAgzGx7R2J3E1VSHsVDV6cjAsr1m4ZTbOUuV1UGqKeEX3GcEfEjbwwirlQ2nDV'
		      		} 
		      	})
		    },
		    alta: function (Usuario) {
		      return $http.post('http://universidaduninova.mx/uninova_api/registro.php', 
		      	{ 
		      		params: { 
		      			nombres   : Usuario.nombres,
		      			apellidos : Usuario.apellidos,
		      			email     : Usuario.email,
		      			carrera   : Usuario.carrera,
		      			k 		  : 'FbXlty3JWwHNHOy3FWlHkSoXhrOtAFcjrA6emGydsfFPE4tblss04GaX4XicfAFk'
		      		} 
		      	})
		    },
		    actualiza: function (Usuario) {
		      return $http.post('http://universidaduninova.mx/uninova_api/actualiza.php', 
		      	{ 
		      		params: { 
		      			id   	  : Usuario.id,
		      			nombres   : Usuario.nombres,
		      			apellidos : Usuario.apellidos,
		      			email     : Usuario.email,
		      			carrera   : Usuario.carrera,
		      			foto      : Usuario.foto,
		      			k		  : 'zIFH9i3lx7ukOKMSmAWSoQmGCtqWBIqACNphlDdBIo8bOzEN8oCDJDp0N5Mus6PL'
		      		} 
		      	})
		    }
		  };

	};

})();