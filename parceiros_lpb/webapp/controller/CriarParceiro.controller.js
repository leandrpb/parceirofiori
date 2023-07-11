sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("zappfreestylelpb.parceiroslpb.controller.CriarParceiro", {

        onInit: function () {

            let oRouter = this.getOwnerComponent().getRouter();

            let oRouterView = oRouter.getRoute("RouteCriarParceiro");

            oRouterView.attachPatternMatched(this.attachPattern, this);

        },

        attachPattern: function(oRouter) {

            let sCodigoParceiro = oRouter.getParameter("arguments").CodigoParceiro;

            let oModel = this.getOwnerComponent().getModel();

            let sCaminho = oModel.createKey("/ParceiroSet", {CodigoParceiro: sCodigoParceiro});

            this.getView().bindElement(sCaminho);


        }
	});
});