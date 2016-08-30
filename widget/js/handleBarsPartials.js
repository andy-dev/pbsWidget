module.exports = function(){
	var Handlebars = require('handlebars-template-loader/runtime');
	var watchVideosPartial = require('../templates/mainMenu/_watchVideosPartial.hbs'),
	 		programmingPartial = require('../templates/mainMenu/_programmingPartial.hbs'),
			engagePromotePartial = require('../templates/mainMenu/_engagePromotePartial.hbs'),
			developmentPartial  = require('../templates/mainMenu/_developmentPartial.hbs'),
			stationManagementPartial  = require('../templates/mainMenu/_stationManagementPartial.hbs'),
			feedsPartial = require('../templates/mainMenu/_feedsPartial.hbs'),
			subMenuRightPartial  = require('../templates/subMenu/_subMenuRightPartial.hbs')

	Handlebars.registerPartial({
		watchVideosPartial       :watchVideosPartial,
		programmingPartial       :programmingPartial,
		engagePromotePartial     :engagePromotePartial,
		developmentPartial       :developmentPartial,
		stationManagementPartial :stationManagementPartial,
		feedsPartial             :feedsPartial,
		subMenuRightPartial      :subMenuRightPartial 
	});
}
