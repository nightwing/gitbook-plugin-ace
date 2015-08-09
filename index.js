var escape = require('html-escape');

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
              return '<div class="aceCode">'+escape(blk.body.trim())+'</div>';
            }
        }
    }
};
