sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {
	
	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	},
	
	handleNavBack : function (evt) { 
		this.nav.back("Master");
	}
});

sap.ui.core.IconPool.addIcon('cheese', 'customfont', 'icomoon', 'e900');  
sap.ui.core.IconPool.addIcon('chicken', 'customfont', 'icomoon', 'e901');  
sap.ui.core.IconPool.addIcon('dessert', 'customfont', 'icomoon', 'e902');  
sap.ui.core.IconPool.addIcon('fish', 'customfont', 'icomoon', 'e903');  
sap.ui.core.IconPool.addIcon('sauce', 'customfont', 'icomoon', 'e904');  
sap.ui.core.IconPool.addIcon('spice', 'customfont', 'icomoon', 'e905');  
sap.ui.core.IconPool.addIcon('vegetable', 'customfont', 'icomoon', 'e906');  
sap.ui.core.IconPool.addIcon('wine', 'customfont', 'icomoon', 'e907');  

