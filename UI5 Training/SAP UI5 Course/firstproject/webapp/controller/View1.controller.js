sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
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
            },
            testI18n:function(){
                var i18nModel = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("customModel").getProperty("/key")

                // Ottieni la stringa localizzata e sostituisci il segnaposto {0} con il valore di 'key'
                var sHelloText = i18nModel.getText("hello", [sRecipient]);

                console.log(sHelloText);  // Dovrebbe stampare "Hi value" o "Hi newValue" a seconda del valore di 'key'
            }
        });
    });