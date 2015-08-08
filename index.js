module.exports = {

    website: {
        assets: "./assets",
        js: [
            "ace.js"
        ]
    },

    blocks: {
        ace: {
            process: function(blk) {
              return 'testing';
            }
        }
    }
};
