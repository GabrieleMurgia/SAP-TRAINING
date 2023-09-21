sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "project1/model/formatters/firstFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , JSONModel , firstFormatter , Filter, FilterOperator , Sorter ) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            formatter: firstFormatter,
            onInit: function () {
                // Crea il ViewModel
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });
                this.getView().setModel(oViewModel, "view");
            },
            onOpenDialog: function() {
                this.getOwnerComponent().openHelloDialog();
              },
              onFilterInvoices : function (oEvent) {
                // costruisci l'array di filtri
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
    
                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }
                
                // applica il filtraggio
                var oList = this.byId("invoicesList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },
            onSortInvoices : function () {
                var oList = this.byId("invoicesList");
                var oBinding = oList.getBinding("items");
                
                var oSorter = new Sorter("ProductName"); // sostituisci "ProductName" con il campo in base al quale vuoi ordinare
                oBinding.sort(oSorter);
            },
            onPress: function (oEvent) {
                var oItem = oEvent.getSource()
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("detail", {
                    invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoiceModel").getPath().substr(1))
                });
            }

        });
    });
