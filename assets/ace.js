require(["gitbook", "jquery"], function(gitbook, $) {

  var init = function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.getSession().setMode("ace/mode/c_cpp");
  };

	gitbook.events.bind("page.change", init);
});
