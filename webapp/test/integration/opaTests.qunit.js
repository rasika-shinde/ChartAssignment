/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"graph/ChartGraph/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});