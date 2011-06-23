/***
* jQuery Mobile Alert Dialog
* 1.0a1 - 6/23/2011
* Brandon <antizeph@gmail.com>
*/
(function($){    
    $.mobile = {
        
        message:    null,
        title:      null,
        modal:      true,
            
        alert: function(message, title){
            if (title == null) title = 'Alert';
            $.mobile._show(message, title);
        },        
        
        //private methods
        _show: function(message, title){
                var height  = $(window).height(),
                    width   = $(window).width(),
                    scrPos  = $(window).scrollTop();
                    
            if ($.mobile.modal){
                //dim background
                $('<div>', {'id':'ui-alert-bg'}).appendTo('body').show();
            }
            
            //insert div into page content
			//ideally, insert this into the current "page"s data-rel="content"
            $('body').append('<div id="ui-alert-content"><p id="ui-alert-message">' + message + '</p></div>');
            
            //adjust position
            //these positions are completely arbitrary, customize as you see fit
            $("#ui-alert-content").css({
                'top': (scrPos + height / 2 - 50),
                'left': (width / 2 - 246 / 2)
            }).addClass('ui-alert-in').show();
            
            //hide alert in a sec
            setTimeout(function(){
                $("#ui-alert-content").removeClass('ui-alert-in');
                $.mobile._hide();
                //console.log("hiding alert...");
            }, 1500)
            
        },
        
        _hide: function(){
            $("#ui-alert-content").addClass('ui-alert-out').animationComplete(function(){
                $(this).remove();
            });
            if ($.mobile.modal) $("#ui-alert-bg").hide();
        }
    }
}) (jQuery);