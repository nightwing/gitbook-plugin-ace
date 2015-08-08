module.exports = {

    website: {
        assets: "./assets",
        css: [
          "ace.css"
        ],
        js: [
          "ace/ace.js",
          "ace.js"
        ]
    },

    blocks: {
        ace: {
            process: function(blk) {
              return '<div class="well" id="editor">'+blk.body.trim()+'</div>';
            }
        }
    }
};
