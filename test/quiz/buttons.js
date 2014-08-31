casper.thenOpen( 'docs/buttons/test.html' );

casper.then(function(){
	phantomcss.screenshot('.grey0', 'Button - Black');
});

casper.then(function(){
	phantomcss.screenshot('.grey20', 'Button - Grey 20');
});

casper.then(function(){
	phantomcss.screenshot('.grey40', 'Button - Grey 40');
});

casper.then(function(){
	phantomcss.screenshot('.grey60', 'Button - Grey 60');
});

casper.then(function(){
	phantomcss.screenshot('.grey80', 'Button - Grey 80');
});

casper.then(function(){
	phantomcss.screenshot('.grey100', 'Button - White');
});

casper.test.done();
