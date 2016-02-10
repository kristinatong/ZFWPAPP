// **************************************************************
// 1) Create the App View                                       *
// 2) Bind the model to the App View                            *
// 3) Return the App View that is bound to the model            *
// **************************************************************

jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		// Create and Set the i18n Resource Model (for text variable resolution)
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");

		// Using OData model to connect against a real service
		//eclipse link
		var url = "proxy/http/ws-sapsvr01.virtusa.com:8010/sap/opu/odata/sap/ZTRAINKT/";
		//launchpad link
//		var url = "/sap/opu/odata/sap/ZTRAINKT/";
//		var url = "http://ws-sapsvr01.virtusa.com:8010/sap/opu/odata/sap/ZTVSHOW_SRV/";
		var oModel = new sap.ui.model.odata.ODataModel(url, true);
		oView.setModel(oModel);

		// Using a local model for offline development
//		var oModel = new sap.ui.model.json.JSONModel("model/FoodWine.json");
//		oView.setModel(oModel);

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			isNoPhone : ! jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});

