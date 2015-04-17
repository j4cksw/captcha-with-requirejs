var allTestFiles = [];

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\/.*Spec.js$/.test(file)) {
			file = file.substring(0, file.length-3);
			var files = file.split('/');
			allTestFiles.push(files[files.length-1]);
		}
	}
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/spec',

  paths: {
        'Capcha': '../source/Capcha'
    },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
