jQuery.sap.declare("sap.ui.demo.myFiori.util.Formatter");

sap.ui.demo.myFiori.util.Formatter = {

	uppercaseFirstChar : function(sStr) {
		return sStr.charAt(0).toUpperCase() + sStr.slice(1);
	},

	discontinuedStatusState : function(sDate) {
		return sDate ? "Error" : "None";
	},

	discontinuedStatusValue : function(sDate) {
		return sDate ? "Discontinued" : "";
	},

	currencyValue : function (value) {
		return parseFloat(value).toFixed(2);
	},
	
	date : function(oValue) {
		if (oValue != undefined) {
			var strDate = oValue;
			var strMM   = strDate.substring(4,6);
			var strDD   = strDate.substring(6,8);
			var strYYYY = strDate.substring(0,4);
			var strMMDDYYYY = strMM + "/" + strDD + "/" + strYYYY;
			return strMMDDYYYY;
		};
	},
	
	_statusStateMap : {
		"1" : "None",
		"2" : "Warning",
		"3" : "Success"
	},

	FilmModeValue :  function (value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("FilmMode" + value, "?");
	},
	
	FilmModeState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	}

};