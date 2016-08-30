module.exports = function(){

  var myPBS_PILL_MENU = {};
  myPBS_PILL_MENU.$ = myPBS_PILL_MENU.jQuery = jQuery.noConflict(true);
  
  myPBS_PILL_MENU.$(function(){

    var myPBS_PILL_MENU = {};
    myPBS_PILL_MENU.$ = myPBS_PILL_MENU.jQuery = jQuery.noConflict(true);

    myPBS_PILL_MENU.open = false;

     myPBS_PILL_MENU.$('.myPBS-pillMenu-openCloseBtn').click(function(e){
      e.preventDefault();
      myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu').toggleClass('myPBS-pillMenu-collapsedMenu');
      myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu').addClass('myPBS-pillMenu-hideMenuSections');
      myPBS_PILL_MENU.$(this).find('i').toggleClass('glyphicon-chevron-right');
      if(myPBS_PILL_MENU.open == false){
        myPBS_PILL_MENU.open = true;
        setTimeout(myPBSmenuTimer, 500);
      } else {
        myPBS_PILL_MENU.open = false;
      }
    });

    var myPBSmenuTimer = function(){
      myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu').toggleClass('myPBS-pillMenu-hideMenuSections');
    };

    var items = myPBS_PILL_MENU.$('.myPBS-pillMenu-overlapblackbg, .slideLeft');
    var myPBSpillMenuContent = myPBS_PILL_MENU.$('.myPBS-pillMenu-content');
    
    var menuopen = function() {
      myPBS_PILL_MENU.$(items).removeClass('menuclose').addClass('menuopen');
    }

    var menuclose = function() { 
      myPBS_PILL_MENU.$(items).removeClass('menuopen').addClass('menuclose');
    }

    myPBS_PILL_MENU.$('#myPBS-pillMenu-navToggle').click(function(){
      if (myPBSpillMenuContent.hasClass('menuopen')) {
        myPBS_PILL_MENU.$(menuclose)
      } else {
        myPBS_PILL_MENU.$(menuopen);
      }
    });

    myPBSpillMenuContent.click(function(){
      if (myPBSpillMenuContent.hasClass('menuopen')) {
        myPBS_PILL_MENU.$(menuclose)
      }
    });

    myPBS_PILL_MENU.$('#myPBS-pillMenu-navToggle, .myPBS-pillMenu-overlapblackbg').on('click', function(){
      myPBS_PILL_MENU.$('.myPBS-pillMenu-container').toggleClass( "mrginleft" );
    });

    myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu-list li').has('.myPBS-pillMenu-wsmenu-submenu, .myPBS-pillMenu-wsmenu-submenu-sub, .myPBS-pillMenu-wsmenu-submenu-sub-sub').prepend('<span class="myPBS-pillMenu-wsmenu-click"><i class="myPBS-pillMenu-wsmenu-myPBS-pillMenu-arrow"></i></span>');
    myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu-list li').has('.megamenu').prepend('<span class="myPBS-pillMenu-wsmenu-click"><i class="myPBS-pillMenu-wsmenu-myPBS-pillMenu-arrow"></i></span>');
    myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu-mobile').click(function(){
      myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu-list').slideToggle('slow');
    });

    // Added by PBS
    myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu-click').click(function(e){
      e.stopPropagation();
      myPBS_PILL_MENU.$('.myPBS-pillMenu-wsmenu-click').parent().not(myPBS_PILL_MENU.$(this).parent()).removeClass('open');
      myPBS_PILL_MENU.$(this).parent().toggleClass('open');
    });
  });
  
}



 
 

