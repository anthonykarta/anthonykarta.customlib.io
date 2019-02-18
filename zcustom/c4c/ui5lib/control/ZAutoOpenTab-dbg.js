sap.ui.define([
	"sap/client/basecontrols/core/CustomPane",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (CustomPane, MessageToast, MessageBox) {
	"use strict";

	// Provides control zcustom.c4c.ui5lib.control.ZAutoOpenTab
	var ZAutoOpenTab = CustomPane.extend("zcustom.c4c.ui5lib.control.ZAutoOpenTab", /** @lends zcustom.c4c.ui5lib.control.ZAutoOpenTab.prototype */ {
		metadata: {

			library: "zcustom.c4c.ui5lib",
			properties: {},
			aggregations: {},
			events: {}
		},

		renderer: function (oRM, oControl) {

		},

		initializePane: function () {

			try {
				var aNavigationMap = [];

				var sThingType = this.getController().getParentController().getComponentModel().getThingType(); //for example, sThingType = COD_MKT_PROSPECT

				if (sThingType === "COD_MKT_PROSPECT") { //one day it will be good to have custom object to easy configure it, but for now....
					aNavigationMap["EXTERNAL PLUMBER"] = "NAVIGATIONITEMID_84725a3667e647aebd85df505632ea82";
					aNavigationMap.length++;
				} else {
					var iStart = this.getParameter("iStart") ? parseInt(this.getParameter("iStart"), 10) : 1;
					var iFinish = this.getParameter("iFinish") ? parseInt(this.getParameter("iFinish"), 10) : 99;

					var aParameters = this.getParameters();
					for (var i = iStart; i <= iFinish; i++) {
						var sThingTypeParameter = "ThingType" + i.toString();
						if (aParameters[sThingTypeParameter] === sThingType) {
							var sBusinessRoleParameter = "BusinessRole" + i.toString();
							var sNavItemParameter = "NavItem" + i.toString();

							try {
								if (!aNavigationMap[aParameters[sBusinessRoleParameter]]) {
									aNavigationMap[aParameters[sBusinessRoleParameter]] = aParameters[sNavItemParameter];
									aNavigationMap.length++;
								}
							} catch (exMap) {
								continue; //something is missing: either BusinessRole.. or NavItem..; nevermind then
							}
						}
					}
				}

				if (aNavigationMap.length > 0) {
					var aBusinessRoles = sap.client.getCurrentApplication().getSettings().getUserBusinessRoleIds();

					var sRoleWithMapping = aBusinessRoles.find(function (sBusinessRole) {
						return aNavigationMap[sBusinessRole];
					});

					var sAutoNavigationItemId = aNavigationMap[sRoleWithMapping];

					if (sAutoNavigationItemId) {

						var oTIDataContainer = this.getController().getParentController().getDataContainer();
						var selectedNavigationItemIdFieldPath = this.getController().getParentController().getStartContext().selectedNavigationItemIdFieldPath;
						if (!selectedNavigationItemIdFieldPath) {
							selectedNavigationItemIdFieldPath = "/Root/UIState/ViewSwitchSelectedItem";
						}
						var oDO = oTIDataContainer.getDataObject(selectedNavigationItemIdFieldPath);

						if (sAutoNavigationItemId !== oDO.getValue()) {
							oDO.setValue(sAutoNavigationItemId);
						}
					}
				}
			} catch (ex) {
				return;
			}
		},

		onBeforeRendering: function () {},

		onAfterRendering: function () {

		}
	});

	return ZAutoOpenTab;

}, true);