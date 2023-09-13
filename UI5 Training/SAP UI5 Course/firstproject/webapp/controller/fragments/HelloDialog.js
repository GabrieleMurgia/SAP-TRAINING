sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.Text} Text
     */
    function (ManagedObject, Fragment) {
        "use strict";

        return ManagedObject.extend("firstproject.controller.fragments.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView
            },

            exit: function () {
                delete this._oView;
            },

            open: function () {
                var oView = this._oView;

                //create the dialog lazily
                if (!oView.byId("helloDialog")) {
                    var oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close()
                        }
                    }
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "firstproject.view.fragments.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        oView.addDependant(oDialog)
                        oDialog.open()
                    })
                } else {
                    oView.byId("helloDialog").open()
                }
            },

        });
    });