sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
  ], function(ManagedObject, Fragment) {
    return ManagedObject.extend("project1.view.Fragments.HelloDialog", {
      constructor: function(oView) {
        this._oView = oView;
      },
      exit: function() {
        delete this._oView;
      },
      open: function() {
        var oView = this._oView;
        if (!oView.byId("HelloDialog")) {
          var oFragmentController = {
            onCloseDialog: function() {
              oView.byId("HelloDialog").close();
            }
          };
          Fragment.load({
            id: oView.getId(),
            name: "project1.view.Fragments.HelloDialog",
            controller: oFragmentController
          }).then(function(oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId("HelloDialog").open();
        }
      }
    });
  });
