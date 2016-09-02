require("../styles/myPBS-pill-menu.css");
require("./bootstrapTab.js");
require("./handleBarsHelpers.js");


(function PbsPillWidget(){
	
	var PbsPillWidget = {};
	var getHandleBarsPartials = require("./handleBarsPartials")
	var template = require('../templates/mainTemplate.hbs');
	var setOpenClosePillHandlers = require("./pill.js")
	PbsPillWidget.$ = PbsPillWidget.jQuery = jQuery.noConflict(true);


	initPbsPill();


	function initPbsPill(){
		PbsPillWidget.$.getJSON("http://jsonip.com", function(response){

			if(response["ip"] != undefined && response["ip"] != null){			
				checkIP(response.ip)
			}
					
		})	
	};
			
	function checkIP(ip){	
		var pbsUrl = "http://dev.mypbs.org/z/components/webservices/Pbsextensionservice.asmx/GetIPWhiteListForUser?strIPAddress="+ip;
	  
	  PbsPillWidget.$.ajax({
      method: 'GET',
      url: pbsUrl
    })
    .done(function(response) {
     	var $xml = PbsPillWidget.$(response);

     	if($xml.length > 0  && ($xml[0].getElementsByTagName("boolean")[0]).innerHTML === "true" ){
     		getPillData();
     	};
  
    })
    .error(function(error){ });
	}


	function getPillData(){		
	  var pbsUrl = "http://dev.mypbs.org/z/components/webservices/Pbsextensionservice.asmx/GetMenuData";
	  
	  PbsPillWidget.$.ajax({
      method: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      url: pbsUrl
    })
    .done(function(response) {
    	getHandleBarsPartials();
     	renderPbsPill(response);    
    })
    .error(function(error) {});
	}
	
	function renderPbsPill(serverResponse){  
	  // var menuServerResponseMock = require('../response.json');

		if(serverResponse.d.length > 0){
		  mapRootMenuItems(serverResponse.d);

		  var div = document.createElement('div');
		  div.innerHTML = template({ MainMenu : serverResponse.d });

		  var appendTo = document.getElementById('pbs-pill-widget'); 
		  appendTo.parentNode.insertBefore(div, appendTo);
		  setOpenClosePillHandlers();		
		}
	}

	function mapRootMenuItems(menuItems) {
		menuItems.forEach(function (rootMenu) {
			var rootMenuItem = rootMenu.MenuItem;

			mapMenuItems(rootMenuItem, rootMenuItem.SubMenu.LeftMenu);
			mapMenuItems(rootMenuItem, rootMenuItem.SubMenu.RightMenu);
		});
	}

	function mapMenuItems(rootMenu, subMenus) {
		subMenus.forEach(function (subMenu) {
			subMenu.RootMenuID = rootMenu.MenuID;
		});
	}

	
})();











	

	