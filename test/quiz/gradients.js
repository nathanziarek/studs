casper.thenOpen( 'docs/gradients/test.html' );

casper.then(function(){
	phantomcss.screenshot('.top-to-bottom', 'Gradient - White Top');
});

casper.then(function(){
	phantomcss.screenshot('.bottom-to-top', 'Gradient - White Bottom');
});

casper.then(function(){
	phantomcss.screenshot('.right-to-left', 'Gradient - White Right');
});

casper.then(function(){
	phantomcss.screenshot('.left-to-right', 'Gradient - White Left');
});


casper.test.done();
