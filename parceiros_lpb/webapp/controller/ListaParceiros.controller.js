sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zappfreestylelpb.parceiroslpb.controller.ListaParceiros", {
            onInit: function () {

            },

            onClickItem: function(oEvent) {
                 
                // Caputar parceiro da linha selecionada!
                let oContexto = oEvent.getSource().getBindingContext().getObject();
                let sCodigoParceiro = oContexto.CodigoParceiro;

                // Navegacao para segunda ROTA
                let oRoteador = this.getOwnerComponent().getRouter();
                oRoteador.navTo("RouteParceiro", {CodigoParceiro: sCodigoParceiro});                
            },

            onCriarButton: function(oEvent) {
                let oRoteador = this.getOwnerComponent().getRouter();
                oRoteador.navTo("RouteCriarParceiro", {CodigoParceiro: "novo_parc"});
            }


        });
    });
