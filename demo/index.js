var cuecard = require('cuecard');

cuecard.create({
	adapter: 'reveal',

	port: 3000,
	remoteUrl: '/remote',

	title: 'Cuecard',

	slides: __dirname + '/slides.html',
	styles: __dirname + '/slides.css'
});