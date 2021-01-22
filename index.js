var fs = require('fs');
var path = require('path');


module.exports = {
	// Map of hooks
	hooks: {

		"finish" : function () {
			var pathFile = this.config.get('pluginsConfig')['favicon'];
			var favicon = path.join(process.cwd(), pathFile);
			var gitbookFaviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'favicon.ico');
			console.log(pathFile, favicon, gitbookFaviconPath);
			if (fs.existsSync(favicon) && fs.existsSync(gitbookFaviconPath)) {
				fs.copyFile(favicon, gitbookFaviconPath, (err) => {
					if (err) throw err;
				});
			} else {
				console.error('custom favicon not exist!');
			}
		}
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
};
