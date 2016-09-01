require("../styles/myPBS-pill-menu.css");
require("./bootstrapTab.js");
require("./handleBarsHelpers.js");


(function PbsPillWidget(){
	
	var PbsPillWidget = {};
	var getPartials = require("./handleBarsPartials")
	var setOpenClosePillHandlers = require("./pill.js")
	PbsPillWidget.$ = PbsPillWidget.jQuery = jQuery.noConflict(true);



	function getPillData(){
	  var pbsUrl = "http://dev.mypbs.org/z/components/webservices/Pbsextensionservice.asmx/GetMenuData";
	  
	  PbsPillWidget.$.ajax({
      method: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      url: pbsUrl
    })
    .done(function(response) {
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
 
	getPartials();
	// renderPbsPill();
	getPillData();
	
})();











	

	