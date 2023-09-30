/*global QUnit*/

sap.ui.define([
	"tiles-project/controller/Tiles.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Tiles Controller");

	QUnit.test("I should test the Tiles controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
