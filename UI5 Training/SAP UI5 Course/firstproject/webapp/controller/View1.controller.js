sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "firstproject/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.Text} Text
     */
    function (Controller, Text) {
        "use strict";

        return Controller.extend("firstproject.controller.View1", {
            onInit: function () {
          
            },

            onChangeText: function() {
                // Ottieni il modello personalizzato dalla vista
                var oModel = this.getView().getModel("customModel");
                var key = oModel.getProperty("/key")
                let newValue = key === "value" ? "newValue" : "value"
                
            
                // Cambia il valore del parametro 'key' nel modello
                oModel.setProperty("/key", newValue);
            
                // Se vuoi aggiornare il modello (non è strettamente necessario in questo caso)
                oModel.refresh(true);
            }
        });
    });