/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "project1/model/models",
        "project1/controller/Fragments/HelloDialog",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models , HelloDialog , JSONModel) {
        "use strict";

        return UIComponent.extend("project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");


                this._HelloDialog = new HelloDialog(this.getRootControl());

                var oModel = new JSONModel(sap.ui.require.toUrl("project1/model/mockModels/invoices.json"));
                this.setModel(oModel, "invoiceModel");
            },

            exit: function() {
                this._HelloDialog.destroy();
                delete this._HelloDialog;
              },
              openHelloDialog: function() {
                this._HelloDialog.open();
              }

        });
    }
);