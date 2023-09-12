sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.Text} Text
     */
    function (Controller, Text,Fragment) {
        "use strict";

        return Controller.extend("firstproject.controller.View2", {
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

            onOpenDialog:function(){
                var oView = this.getView();
                //Creazione Dialog
                if(!this.byId("helloDialog")){
                    //load asynchronus XML fragment
                    Fragment.load({
                        id:oView.getId(),
                        name:"firstproject.view.fragments.HelloDialog"
                    }).then(function(oDialog){
                        // connect dialog to the root view of this component (models,lifecycle)
                        oView.addDependent(oDialog)
                        oDialog.open()
                    })
                }else{
                    this.byId("helloDialog").open()
                }
            }

        });
    });