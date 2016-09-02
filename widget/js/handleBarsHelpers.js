var Handlebars = require('handlebars-template-loader/runtime');


Handlebars.registerHelper('getHtmlElements', function(contentsArray, contentsVisibleFlag){
	var parser = new DOMParser;
	var htmlContents =[];
	
	if (contentsArray.length > 0 && contentsVisibleFlag != false){
	  for (var i = 0; i < contentsArray.length; i++) {   
	    var xmlString = contentsArray[i].Html;
	  	if (xmlString != ""){
	    	var doc = parser.parseFromString(xmlString, "text/xml");
	    	htmlContents.push({
		      Link        : doc.firstChild.childNodes[0].getAttribute("href"),
		      Description : doc.firstChild.childNodes[0].getElementsByTagName("p")[0].innerHTML,
		      Header      : doc.firstChild.childNodes[0].getElementsByTagName("h4")[0].innerHTML,
		      Image       : doc.firstChild.childNodes[0].getElementsByTagName("img")[0].getAttribute("src")
		    })
	  	}
	  }	
	} 
	return htmlContents;
});

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options){
	lvalue = parseFloat(lvalue);
	rvalue = parseFloat(rvalue);

	return {
		"+": lvalue + rvalue,
		"-": lvalue - rvalue,
		"*": lvalue * rvalue,
		"/": lvalue / rvalue,
		"%": lvalue % rvalue
	}[operator];
});

