sap.ui.define([
	"sap/client/basecontrols/core/CustomPane",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(CustomPane, MessageToast, MessageBox) {
	"use strict";

	// Provides control zcustom.c4c.ui5lib.control.ZCustomEmptyPane
	var ZCustomEmptyPane = CustomPane.extend("zcustom.c4c.ui5lib.control.ZCustomEmptyPane", /** @lends zcustom.c4c.ui5lib.control.ZCustomEmptyPane.prototype */ {
		metadata: {

			library: "zcustom.c4c.ui5lib",
			properties: {
			},
			aggregations: {
			},
			events: {
			}
		},

		renderer: function(oRM, oControl) {

		},

		initializePane: function() {

			var that = this;

		},
		
		onBeforeRendering: function() {
			
			var that = this;	
			
		},
		
		onAfterRendering: function() {
			
			var that = this;	
			
		}
	});

	return ZCustomEmptyPane;

}, true);