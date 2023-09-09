sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.Text} Text
     */
    function (Controller, Text) {
        "use strict";

        return Controller.extend("firstproject.controller.View1", {
            onInit: function () {
                // Crea un nuovo oggetto Text
                var oText = new Text({
                    text: "Ciao"
                });

                // Ottieni la pagina dalla view
                var oPage = this.getView().byId("page");

                // Aggiungi il testo alla pagina
                oPage.addContent(oText);
            }
        });
    });