function pullMenu(){
	var pull = jQuery('#pull');
    menu = jQuery('.mobile-menu .primary');
    menuHeight = menu.height();
 
    jQuery(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
};

// /* Questa funzione equalizza le altezze di "itemElement" e assegna un min-height  */
// function equalHeight(itemElement){
    
//     var highestBox = 0;
//     jQuery(itemElement).each(function(){
//         if(jQuery(this).height() > highestBox){  
//             highestBox = jQuery(this).outerHeight();  
//         }
//     }).css("min-height",highestBox);
// }

// /* questa funzione resetta l'altezza di "itemElement" assegnando min-heigh = 0; */
// function resetHeight(itemElement){
//     jQuery(itemElement).css("min-height", 0);
// }

// function popup(){
//     jQuery(document).on('click', '[data-toggle="popup"]', function(){
//         var $this = jQuery(this);
//         var idPopup = $this.data("target");

//         if($this.hasClass("pop-on")){
//             $this.removeClass("pop-on").addClass("pop-off");
//         }
//         else{
//             $this.addClass("pop-on").removeClass("pop-off");
//         } 
//     });
// }