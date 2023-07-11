sap.ui.define([
	"sap/ui/core/mvc/Controller"
], 
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller) {
	    "use strict";

	    return Controller.extend("zappfreestylelpb.parceiroslpb.controller.CriarParceiro", {

        /**
         * @override
         */
        onInit: function() {

            // Get Component Router
            let oRouter = this.getOwnerComponent().getRouter();

            // Get Router Criar Parceiro
            let oRouteCriarParceiro = oRouter.getRoute("RouteCriarParceiro");

            //oRouteCriarParceiro.


            
        
        }
	});
});