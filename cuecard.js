var path = require('path');

exports.config = {
	port: 3000,
	remoteUrl: '/remote',

	title: 'Getting Closure',

	slides: path.join(__dirname, '/fathom/slides.jade'),
	styles: path.join(__dirname, '/fathom/slides.styl')
};