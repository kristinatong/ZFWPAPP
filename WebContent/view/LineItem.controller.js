sap.ui.controller("sap.ui.demo.myFiori.view.LineItem", {

	handleNavBack : function (evt) { 
		this.nav.back("Detail");
	},
	
	handleNavButtonPress : function (evt) {
	this.nav.back("Master");
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	}
});
