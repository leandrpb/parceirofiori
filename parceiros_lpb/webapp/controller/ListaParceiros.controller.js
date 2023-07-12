sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zappfreestylelpb.parceiroslpb.controller.ListaParceiros", {
            onInit: function () {

            },

            onClickItem: function(oEvent) {
                 
                // Caputar parceiro da linha selecionada!
                let oContexto = oEvent.getSource().getBindingContext().getObject();
                let sCodigoParceiro = oContexto.CodigoParceiro;

                let oRouteModel = this.getOwnerComponent().getModel("route");

                // Armazenar ultimo codigo clicado
                oRouteModel.setProperty("/lastCodigoParceiro", sCodigoParceiro);


                // Navegacao para segunda ROTA
                let oRoteador = this.getOwnerComponent().getRouter();
                oRoteador.navTo("RouteParceiro", {CodigoParceiro: sCodigoParceiro});                
            },

            onCriarButton: function(oEvent) {

                let oRoteador = this.getOwnerComponent().getRouter();
                
               // Get Current Route
               let sCurrentHash = this.getOwnerComponent().getRouter().getHashChanger().getHash();
               let sLastRoute = oRoteador.getRouteInfoByHash(sCurrentHash).name;
               let sLastPattern = this.getOwnerComponent().getRouter().getRoute(sLastRoute)._aPattern[0];
               
               //Store lastRoute for returning in create view
               let oModel= this.getOwnerComponent().getModel("route");
               oModel.setProperty("/lastRoute", sLastRoute);
               oModel.setProperty("/lastPattern", this.getOwnerComponent().getRouter().getRoute(sLastRoute)._aPattern[0]);

                oRoteador.navTo("RouteCriarParceiro", {CodigoParceiro: "novo_parc"});
            }


        });
    });
