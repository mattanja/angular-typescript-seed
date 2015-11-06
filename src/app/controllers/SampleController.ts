/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../models/SampleItem.ts" />

module app.controllers {
	export class SampleController {
		/**
		 * This is the TypeScript (aka "workaround") way of angular
		 * dependency injection.
		 */
		public static $inject = ['$log'];
		constructor(private $log: ng.ILogService) {
			this.$log.info("SampleController()");
		}

		/**
		 * Define controller (=view model) properties here.
		 * We're not using $scope in a controller anymore but bind the view
		 * to the controller instance instead.
		 */
		public sampleItems: models.SampleItem[] = [];

		/**
		 * Add a new item to the sample items list.
		 */
		public addItem() {
			let newItem = {
				name: 'item' + (this.sampleItems.length + 1),
			};
			this.$log.info("Adding new item", newItem);
			this.sampleItems.push(newItem);
		}
	}
}
