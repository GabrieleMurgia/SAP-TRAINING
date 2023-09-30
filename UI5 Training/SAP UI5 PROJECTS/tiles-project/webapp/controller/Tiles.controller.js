sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , JSONModel) {
        "use strict";

        return Controller.extend("tilesproject.controller.Tiles", {
            onInit: function () {
                let myTylesModel = new JSONModel("../model/tiles.json")
                this.getView().setModel(myTylesModel , "tiles")
            },
            press:function (oRoute) {
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }
        });
    });
