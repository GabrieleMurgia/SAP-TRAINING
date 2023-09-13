/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "firstproject/model/models",
        "./controller/fragments/HelloDialog"
    ],
    function (UIComponent, Device, models , HelloDialog) {
        "use strict";

        return UIComponent.extend("firstproject.Component", {
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

                 // set a custom model
                 var oCustomModel = models.createCustomModel({
                    key: "value",
                    anotherKey: "anotherValue"
                });
                this.setModel(oCustomModel, "customModel");

                //set dialog
                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit:function(){
                this._helloDialog.destroy()
                delete this._helloDialog
            },

            openHelloDialog:function(){
               this._helloDialog.open() 
            }
        });
    }
);