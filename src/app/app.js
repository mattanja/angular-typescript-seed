/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../models/SampleItem.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var SampleController = (function () {
            function SampleController($log) {
                this.$log = $log;
                /**
                 * Define controller (=view model) properties here.
                 * We're not using $scope in a controller anymore but bind the view
                 * to the controller instance instead.
                 */
                this.sampleItems = [];
                this.$log.info("SampleController()");
            }
            /**
             * Add a new item to the sample items list.
             */
            SampleController.prototype.addItem = function () {
                var newItem = {
                    name: 'item' + (this.sampleItems.length + 1),
                };
                this.$log.info("Adding new item", newItem);
                this.sampleItems.push(newItem);
            };
            /**
             * This is the TypeScript (aka "workaround") way of angular
             * dependency injection.
             */
            SampleController.$inject = ['$log'];
            return SampleController;
        })();
        controllers.SampleController = SampleController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="controllers/SampleController.ts" />
var app;
(function (app) {
    'use strict';
    var main = angular.module('angular-typescript-seed', []);
    main.config(function () {
    });
    main.controller('SampleController', app.controllers.SampleController);
    main.run(['$log', function ($log) {
            $log.info("Starting angular-typescript-seed app");
        }]);
})(app || (app = {}));
//# sourceMappingURL=app.js.map