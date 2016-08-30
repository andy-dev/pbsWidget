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

	function renderPbsPill(serverResponse){
	  var template = require('../templates/mainTemplate.hbs');
	  var menuServerResponseMock = require('../response.json');
	
	  var div = document.createElement('div');
	  div.innerHTML = template({
	  	WatchVideos         :menuServerResponseMock.d[0],
			Programming         :menuServerResponseMock.d[1],
			EngagePromote       :menuServerResponseMock.d[2],
			Development         :menuServerResponseMock.d[3],
			StationManagement   :menuServerResponseMock.d[4],
			Feeds               :menuServerResponseMock.d[5]
	  });

	  var appendTo = document.getElementById('pbs-pill-widget'); 
	  appendTo.parentNode.insertBefore(div, appendTo);
	  setOpenClosePillHandlers();
	}
 
	getPartials();
	renderPbsPill();
	// getPillData();
	
})();











	

	