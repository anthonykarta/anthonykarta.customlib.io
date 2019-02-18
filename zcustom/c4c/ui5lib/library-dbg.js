/*!
 * ${copyright}
 */
/* globals zcustom */
/**
 * Initialization code and shared classes of library zcustom.c4c.ui5lib
 */
sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/library"
], function(jQuery, library) {
	"use strict";


	/**
	 * A library containing mobile controls
	 *
	 * @namespace
	 * @name zcustom.c4c.ui5lib
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "zcustom.c4c.ui5lib",
		dependencies : ["sap.ui.core", "sap.m" , "sap.ui.unified"],
		types: [],
		interfaces: [],
		controls: [
			"zcustom.c4c.ui5lib.control.ZCustomEmptyPane",
			"zcustom.c4c.ui5lib.control.ZBarCodeScanner",
			"zcustom.c4c.ui5lib.contorl.ZPlumberLeadPane",
			"zcustom.c4c.ui5lib.contorl.ZAutoOpenTab"
		],
		elements: [],
		version: "0.1.0"
	});

	return zcustom.c4c.ui5lib;

});
