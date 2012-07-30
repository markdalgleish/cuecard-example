var cuecard = require('cuecard');

cuecard.configure({
	title: 'Getting Closure',
	html: __dirname + '/slides.html',
	css: __dirname + '/style.css'
});

cuecard.server.listen(3000);