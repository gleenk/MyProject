function pullMenu(){
	var pull = jQuery('#pull');
    menu = jQuery('.mobile-menu .primary');
    menuHeight = menu.height();
 
    jQuery(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
};

function switchList(){
	jQuery(".switchListGrid").on("click", function(e){
		e.preventDefault();
		var getListing = jQuery(".listing-product");
		var checkListingGrid = getListing.hasClass("listing-grid");

		if(!checkListingGrid){
			getListing.removeClass("listing-rows").addClass("listing-grid");
		}
		jQuery(this).addClass("active").prev().removeClass("active");
	})

	jQuery(".switchListRows").on("click", function(e){
		e.preventDefault();
		var getListing = jQuery(".listing-product");
		var checkListingRows = getListing.hasClass("listing-rows");

		if(!checkListingRows){
			getListing.removeClass("listing-grid").addClass("listing-rows")
		}
		jQuery(this).addClass("active").next().removeClass("active");
	})

	jQuery(".nav-title").on("click", function(){
		jQuery(".main-navigation").slideToggle();
	});
}

function productSlider(){
	var sync1 = jQuery(".big-thumb"),
	    sync2 = jQuery(".thumb-carousel");

	    sync1.owlCarousel({
	    	singleItem : true,
	    	slideSpeed : 1000,
	    	navigation : false,
	    	pagination : false,
	    	afterAction : syncPosition,
	    	responsiveRefreshRate : 200,
	    });

	    sync2.owlCarousel({
	    	items : 5,
	    	itemsDesktop      : [1199,5],
	    	itemsDesktopSmall : [979,4],
	    	itemsTablet       : [768,3],
	    	itemsMobile       : [479,1],
	    	pagination:false,
	    	responsiveRefreshRate : 100,
	    	afterInit : function(el){
	    		el.find(".owl-item").eq(0).addClass("synced");
	    	}
	    });

	    function syncPosition(el){
	    	var current = this.currentItem;
	    	jQuery(".thumb-carousel")
		    	.find(".owl-item")
		    	.removeClass("synced")
		    	.eq(current)
		    	.addClass("synced")
		    	if(jQuery(".thumb-carousel").data("owlCarousel") !== undefined){
	    		center(current)
	    	}
	    }

	    jQuery(".thumb-carousel").on("click", ".owl-item", function(e){
	    	e.preventDefault();
	    	var number = jQuery(this).data("owlItem");
	    	sync1.trigger("owl.goTo",number);
	    });

	    function center(number){
	    	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	    	var num = number;
	    	var found = false;
	    	for(var i in sync2visible){
	    		if(num === sync2visible[i]){
	    			var found = true;
	    		}
	    	}

	    	if(found===false){
	    		if(num>sync2visible[sync2visible.length-1]){
	    			sync2.trigger("owl.goTo", num - sync2visible.length+2)
	    		}else{
	    			if(num - 1 === -1){
	    				num = 0;
	    			}
	    			sync2.trigger("owl.goTo", num);
	    		}
	    	} else if(num === sync2visible[sync2visible.length-1]){
	    		sync2.trigger("owl.goTo", sync2visible[1])
	    	} else if(num === sync2visible[0]){
	    		sync2.trigger("owl.goTo", num-1)
	    	}

	    }
}