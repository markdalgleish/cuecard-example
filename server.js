var cuecard = require('cuecard');

cuecard.create({
	port: 3000,
	remoteUrl: '/my-remote-url',

	title: 'Getting Closure',

	slides: __dirname + '/slides.jade',
	styles: __dirname + '/slides.styl'
});