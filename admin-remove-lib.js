jQuery(document).ready(function($){
    setTimeout(function(){
        var iframeBody = $('body', $('#content_ifr')[0].contentWindow.document);
        $(iframeBody).on('click mousedown', 'img', function(event) {
            var getThisClass = $(this).attr("class").match(/\d+$/)[0];
            var putToThis = $('.mce-toolbar-grp').find($('div:last-child').attr('aria-label', 'Remove').find('button'));
            $(putToThis).attr("att-id", getThisClass);
            $(putToThis).attr("class", "remove-for-good");
        });
     }, 2000);
     $(document).on("click", ".remove-for-good", function(){
        var thisID = $(this).attr("att-id");
        if (confirm('Warning! Remove from Media Also?.')) {
        $.ajax({
                type: 'POST',
                url: ajaxurl,
                data: {
                    action: 'remove_for_good_att',
                    attid: thisID,
                    post_type: 'attachment'
                },
                success: function( html ) {
                    alert( "Sucessfully removed from media also." );
                    $(".media-modal .media-frame-content ul").find($("li.attachment[data-id='" + html + "']")).remove();
                }
            });
        }
      }); 
});