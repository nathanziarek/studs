casper.then( function now_check_the_screenshots(){
	// compare screenshots
	phantomcss.compareAll();
});

casper.then( function end_it(){
	casper.test.done();
});

casper.run(function(){
	phantom.exit(phantomcss.getExitStatus());
});
