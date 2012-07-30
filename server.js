var cuecard = require('cuecard');

cuecard.create({
	port: 3000,
	remoteUrl: '/my-remote-url',
	title: 'Getting Closure',
	html: __dirname + '/slides.html',
	css: __dirname + '/slides.css'
});