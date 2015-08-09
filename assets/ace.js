require(["gitbook", "jquery"], function(gitbook, $) {

  var init = function(){
    var aceCount = 0;

    $('.aceCode').each(function(){
      var $ace = $(this);

      var id = 'ace'+(aceCount++);
      $ace.attr('id', id);

      var editor = ace.edit(id);
      editor.setTheme('ace/theme/chrome');
      editor.getSession().setMode('ace/mode/c_cpp');
      editor.setOptions({maxLines: Infinity});

      // handler for dark theme
      setTimeout(function(){
        if($('.book').hasClass('color-theme-2')){
          $ace.addClass('dark');
          editor.setTheme('ace/theme/vibrant_ink');
        }
      }, 1);

			$('#color-theme-preview-0, #color-theme-preview-1').click(function(){
        $ace.removeClass('dark');
				editor.setTheme('ace/theme/chrome');
			});

			$('#color-theme-preview-2').click(function(){
        if(!$ace.hasClass('dark'))  $ace.addClass('dark');
				editor.setTheme('ace/theme/vibrant_ink');
			});
    });
  };

	gitbook.events.bind("page.change", init);
});
