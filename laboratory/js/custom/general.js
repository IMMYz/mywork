/*
 * 	Additional function for this template
 *	Written by ThemePixels	
 *	http://themepixels.com/
 *
 *	Copyright (c) 2012 ThemePixels (http://themepixels.com)
 *	
 *	Built for Amanda Premium Responsive Admin Template
 *  http://themeforest.net/category/site-templates/admin-templates
 */


 
 
 
jQuery.noConflict();

jQuery(document).ready(function(){
								
	jQuery('.userinfo').click(function(){
		if(!jQuery(this).hasClass('active')) {
			jQuery('.userinfodrop').show();
			jQuery(this).addClass('active');
		} else {
			jQuery('.userinfodrop').hide();
			jQuery(this).removeClass('active');
		}
		//remove notification box if visible
		jQuery('.notification').removeClass('active');
		jQuery('.noticontent').remove();
		
		return false;
	});
	
	
	

	///// SHOW/HIDE VERTICAL SUB MENU /////	
	
	jQuery('.vernav ul li').each(function(){
		jQuery(this).click(function(){
			jQuery(this).siblings("li").removeClass("current");
			jQuery(this).addClass("current");
			jQuery(this).siblings("li").find('dl').removeClass("editor");
			jQuery(this).find('dl').addClass("editor");
		});
	});
	jQuery('.vernav ul li dl dd').each(function(){
		jQuery(this).click(function(){
			jQuery(this).parent().parent().parent().find('dd').removeClass('current')
			jQuery(this).siblings("dd").removeClass("current");
			jQuery(this).addClass("current");
		});
	});
	
	jQuery('.chaxun').click(function(){
		jQuery('.table_div').toggle();
		return false;
	});
	///// 鉴定情况 /////
	jQuery('.field .bcjd').click(function(){
		window.location.href='managewtztcx.html';
	});
	jQuery('.field .cxjd').click(function(){
		window.location.href='managewtztcx.html';
	});
	var i = 0;
	jQuery('.button').click(function(){
		i++;
		var tabTbody = jQuery(this).prev().find('tbody');
		var tabTd = jQuery(this).prev().find('tr').eq(-1).find('td:first').html();//td序号为3
		var tabTdd = parseInt(tabTd)+1;
		var tabi = 'gradeB' + i;
		jQuery(tabTbody).append('<tr class="'+tabi+'"><td class="td_shu"></td><td><input type="text" name="firstname" class="longinput" placeholder="" /></td><td><input type="text" name="firstname" class="longinput" placeholder="" /></td><td><input type="text" name="firstname" class="longinput" placeholder="" /></td><td class="center"><input type="text" name="firstname" class="longinput" placeholder="" /></td><td class="center"><input type="text" name="firstname" class="longinput" placeholder="" /></td><td><input type="text" name="firstname" class="longinput" placeholder="" /></td><td><input type="text" name="firstname" class="longinput" placeholder="" /></td></tr>');
		jQuery('.'+tabi).find('.td_shu').html(tabTdd);
	});
	
	///// HORIZONTAL NAVIGATION (AJAX/INLINE DATA) /////	
	
	/*右侧点击选项卡*/jQuery('.hornav a').click(function(){
		
		//this is only applicable when window size below 450px
		if(jQuery(this).parents('.more').length == 0)
			jQuery('.hornav li.more ul').hide();
		
		//remove current menu
		jQuery('.hornav li').each(function(){
			jQuery(this).removeClass('current');
		});
		
		jQuery(this).parent().addClass('current');	// set as current menu
		
		var url = jQuery(this).attr('href');
		if(jQuery(url).length > 0) {
			jQuery('.contentwrapper .subcontent').hide();
			jQuery(url).show();
		} else {
			jQuery.post(url, function(data){
				jQuery('#contentwrapper').html(data);
				jQuery('.stdtable input:checkbox').uniform();	//restyling checkbox
			});
		}
		return false;
	});
	
	
	///// COLLAPSED/EXPAND LEFT MENU /////
	jQuery('.togglemenu').click(function(){
		if(!jQuery(this).hasClass('togglemenu_collapsed')) {
			
			//if(jQuery('.iconmenu').hasClass('vernav')) {
			if(jQuery('.vernav').length > 0) {
				if(jQuery('.vernav').hasClass('iconmenu')) {
					jQuery('body').addClass('withmenucoll');
					jQuery('.iconmenu').addClass('menucoll');
				} else {
					jQuery('body').addClass('withmenucoll');
					jQuery('.vernav').addClass('menucoll').find('ul').hide();
				}
			} else if(jQuery('.vernav2').length > 0) {
			//} else {
				jQuery('body').addClass('withmenucoll2');
				jQuery('.iconmenu').addClass('menucoll2');
			}
			
			jQuery(this).addClass('togglemenu_collapsed');
			
			jQuery('.iconmenu > ul > li > a').each(function(){
				var label = jQuery(this).text();
				jQuery('<li><span>'+label+'</span></li>')
					.insertBefore(jQuery(this).parent().find('ul li:first-child'));
			});
		} else {
			
			//if(jQuery('.iconmenu').hasClass('vernav')) {
			if(jQuery('.vernav').length > 0) {
				if(jQuery('.vernav').hasClass('iconmenu')) {
					jQuery('body').removeClass('withmenucoll');
					jQuery('.iconmenu').removeClass('menucoll');
				} else {
					jQuery('body').removeClass('withmenucoll');
					jQuery('.vernav').removeClass('menucoll').find('ul').show();
				}
			} else if(jQuery('.vernav2').length > 0) {	
			//} else {
				jQuery('body').removeClass('withmenucoll2');
				jQuery('.iconmenu').removeClass('menucoll2');
			}
			jQuery(this).removeClass('togglemenu_collapsed');	
			
			jQuery('.iconmenu ul ul li:first-child').remove();
		}
	});
	
	
	
	///// RESPONSIVE /////
	if(jQuery(document).width() < 640) {
		jQuery('.togglemenu').addClass('togglemenu_collapsed');
		if(jQuery('.vernav').length > 0) {
			
			jQuery('.iconmenu').addClass('menucoll');
			jQuery('body').addClass('withmenucoll');
			jQuery('.centercontent').css({marginLeft: '56px'});
			if(jQuery('.iconmenu').length == 0) {
				jQuery('.togglemenu').removeClass('togglemenu_collapsed');
			} else {
				jQuery('.iconmenu > ul > li > a').each(function(){
					var label = jQuery(this).text();
					jQuery('<li><span>'+label+'</span></li>')
						.insertBefore(jQuery(this).parent().find('ul li:first-child'));
				});		
			}

		} else {
			
			jQuery('.iconmenu').addClass('menucoll2');
			jQuery('body').addClass('withmenucoll2');
			jQuery('.centercontent').css({marginLeft: '36px'});
			
			jQuery('.iconmenu > ul > li > a').each(function(){
				var label = jQuery(this).text();
				jQuery('<li><span>'+label+'</span></li>')
					.insertBefore(jQuery(this).parent().find('ul li:first-child'));
			});		
		}
	}
	

});