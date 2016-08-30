var Handlebars = require('handlebars-template-loader/runtime');

Handlebars.registerHelper('listItem', function(from, to, context, options){
	var item = "";
	for(var i = from, j=to; i < j; i++){
		item += options.fn(context[i]);
	}
	return item;
});

Handlebars.registerHelper('createLeftLiColumn', function(rightMenuSub){
	var leftColumnLength = Math.ceil(rightMenuSub.length/2);
	var results = [];

	for(var i=0; i < leftColumnLength; i++){
  	results.push({
    	leftLiItem : rightMenuSub[i].Text,
    	link       : rightMenuSub[i].Url
    })
  } 
  return results; 
});

Handlebars.registerHelper('createRightLiColumn', function(rightMenuSub){	
	var rightColumnLength = Math.floor(rightMenuSub.length/2);
	var results = [];

	for(var i=0; i < rightColumnLength; i++){
  	results.push({
    	rightLiItem : rightMenuSub[i].Text,
    	link        : rightMenuSub[i].Url
    })
  } 
  return results; 
});

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
	};
	  
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

Handlebars.registerHelper("incIndex", function(value, options){
	return parseInt(value) + 1;
});