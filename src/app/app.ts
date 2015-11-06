/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="controllers/SampleController.ts" />

module app {
	'use strict';

	let main = angular.module('angular-typescript-seed', [
	]);

	main.config(() => {
	});

	main.controller('SampleController', app.controllers.SampleController);

	main.run(['$log', ($log: angular.ILogService) => {
		$log.info("Starting angular-typescript-seed app");
	}]);
}
