(function(){
	'use strict';
	
	angular
		.module('testmodule')
		.factory('testservice', ['$http', testservice]);
		
	function testservice($http)
	{
		var service = {
			ping: ping
		};
		 
		return service;
		
		function ping() {
			return 'pong';
		}
	}
})();