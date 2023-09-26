sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        createCustomModel: function () {
            var oModel = new JSONModel({
                firstName: "Harry",
                lastName: "Hawk",
                enabled: true,
                address: {
                    street: "1 Any Lane",
                    city: "Walldorf",
                    zip: "69190",
                    country: "Germany"
                },
                salesAmount: 12345.6789,
                priceThreshold: 20,
                currencyCode: "EUR",
                panelHeaderText: "Data Binding Basics"
            });
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
        },
        createProductModel: function () {
            var oProductModel = new JSONModel();
            oProductModel.loadData("model/Products.json");
            oProductModel.attachRequestCompleted(function() {
            oProductModel.setDefaultBindingMode("TwoWay");
        });
        return oProductModel;
        }

        
    };
});