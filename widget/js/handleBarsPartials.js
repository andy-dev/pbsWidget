module.exports = function(){
	var Handlebars = require('handlebars-template-loader/runtime');
	var mainMenuPartial = require('../templates/mainMenu/_mainMenuPartial.hbs')
	var subMenuRightPartial = require('../templates/subMenu/_subMenuRightPartial.hbs')

	Handlebars.registerPartial({
		mainMenuPartial:mainMenuPartial,
		subMenuRightPartial:subMenuRightPartial 
	});
}
