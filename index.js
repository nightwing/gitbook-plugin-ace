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
              if(this.generator === 'website'){
                var config = {
                  edit: blk.kwargs.edit,
                  lang: blk.kwargs.lang
                };
                return '<div class="ace"><div class="aceCode" data-config='+JSON.stringify(config)+'>'+escape(blk.body.trim())+'<br></div>';
              } else {
                var body = blk.body.trim();
                return '<pre>' + escape(body) + '</pre>';
              }
            }
        }
    }
};
