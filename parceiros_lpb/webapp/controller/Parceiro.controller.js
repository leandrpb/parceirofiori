sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel) {
        "use strict";

        return Controller.extend("zappfreestylelpb.parceiroslpb.controller.Parceiro", {
            onInit: function () {

                // Attach function to capture change in Patterns of the Route
                
                // Captura o roteador do projeto
                let oRouter = this.getOwnerComponent().getRouter();

                // Roteador captura Rota
                let oRouterParams = oRouter.getRoute("RouteParceiro");
                
                // Dispara a funcao GetPatternChanges toda vez que a pattern definida na view for igual
                oRouterParams.attachPatternMatched(this.getPatternChanges, this);

                let oModel = new JSONModel();
                oModel.setProperty("/enabled", false);
                this.getView().setModel(oModel, "edicao");

                oModel = new JSONModel();
                oModel.setProperty("/footerVisible", false)
                this.getView().setModel(oModel, "footer");
                
                // Setar model pra TWOWAY
                this.getOwnerComponent().getModel().setDefaultBindingMode('TwoWay');

            },

            getPatternChanges: function(oEvent) {

                let sCodigoParceiro = oEvent.getParameter("arguments").CodigoParceiro;

                let oModel = this.getOwnerComponent().getModel();

                let sCaminho = oModel.createKey("/ParceiroSet", {CodigoParceiro: sCodigoParceiro});

                this.getView().bindElement(sCaminho);
               
                // Resetar caso o usuario saia da Rota ou Chama outro parceiro
                this.getOwnerComponent().getModel().resetChanges();
                this._configureEdition(false);
                this._setFooterVisibility(false);                
            },

            onButtonEdit: function(oEvent) {
                   
                this._configureEdition(true);
                this._setFooterVisibility(true);

            },

            onCancelButton: function(oEvent) {
                
                this.getOwnerComponent().getModel().resetChanges();
                this._configureEdition(false);
                this._setFooterVisibility(false);                

            },

            onSaveButton: function(oEvent) {

                let sPath = this.getView().getBindingContext().sPath;

                let oDadosTela = this.getView().getBindingContext().getObject();

                let oInfoUpdate = {
                    CodigoParceiro: oDadosTela.CodigoParceiro,
                    Tipo: oDadosTela.Tipo,
                    Nome1: oDadosTela.Nome1,
                    Nome2: oDadosTela.Nome2

                }


                this._setFooterVisibility(false);
                this._configureEdition(false);
            },

            _configureEdition: function(bEnableEdition) {

                let oModelEditavel = this.getView().getModel("edicao");

                oModelEditavel.setProperty("/enabled", bEnableEdition);

            },

            _setFooterVisibility: function(bFooterVisible) {

                let oModelFooter = this.getView().getModel("footer");
                oModelFooter.setProperty("/footerVisible", bFooterVisible);


            }

        });
    });
