require("../styles/myPBS-pill-menu.css");
require("./bootstrapTab.js");
require("./handleBarsHelpers.js");


(function PbsPillWidget(){
	
	var PbsPillWidget = {};
	var getHandleBarsPartials = require("./handleBarsPartials")
	var setOpenClosePillHandlers = require("./pill.js")
	PbsPillWidget.$ = PbsPillWidget.jQuery = jQuery.noConflict(true);

	function getIP(){
		$.getJSON("http://jsonip.com", getIP)

		function getIP(response){
			checkIP(response.ip)
		}
	};
			
	function checkIP(ip){	
		var pbsUrl = "http://dev.mypbs.org/z/components/webservices/Pbsextensionservice.asmx/GetIPWhiteListForUser?strIPAddress="+ip;
	  
	  $.ajax({
      method: 'get',
      url: pbsUrl
    })
    .done(function(response) {
     	console.log("success")
     	var xml = response;
     	$xml = $(response);

     	if(($xml[0].getElementsByTagName("boolean")[0]).innerHTML === "true"){
     		getPillData();
     	};
  
    })
    .error(function (error) {
      console.log(error);
    });
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
    .error(function (error) {
      console.log(error);
    });
	}

	function mapMenuItems(rootMenu, subMenus) {
		subMenus.forEach(function (subMenu) {
			subMenu.RootMenuID = rootMenu.MenuID;
		});
	}

	function mapRootMenuItems(menuItems) {
		menuItems.forEach(function (rootMenu) {
			var rootMenuItem = rootMenu.MenuItem;

			mapMenuItems(rootMenuItem, rootMenuItem.SubMenu.LeftMenu);
			mapMenuItems(rootMenuItem, rootMenuItem.SubMenu.RightMenu);
		});
	}

	function renderPbsPill(serverResponse){
	  var template = require('../templates/mainTemplate.hbs');
	  // var menuServerResponseMock = require('../response.json');
		
	  mapRootMenuItems(serverResponse.d);

	  var div = document.createElement('div');
	  div.innerHTML = template({ MainMenu : serverResponse.d });

	  var appendTo = document.getElementById('pbs-pill-widget'); 
	  appendTo.parentNode.insertBefore(div, appendTo);
	  setOpenClosePillHandlers();
	}

	getIP();
 
	
})();











	

	