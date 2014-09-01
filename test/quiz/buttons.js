casper.thenOpen( 'docs/buttons/test.html' );

var buttonStyles = [
    { selector: '.grey0', title: 'Button - Grey 0' },
    { selector: '.grey25', title: 'Button - Grey 25' },
    { selector: '.grey50', title: 'Button - Grey 50' },
    { selector: '.grey75', title: 'Button - Grey 75' },
    { selector: '.grey100', title: 'Button - Grey 100' },
];

var curIndex = 0;

casper.repeat(buttonStyles.length, function() {
    buttonStyle = buttonStyles[curIndex];
    casper.then(function(){
        phantomcss.screenshot(buttonStyle.selector, buttonStyle.title);
    });
    casper.then(function(){
        this.mouse.move(buttonStyle.selector);
        phantomcss.screenshot(buttonStyle.selector, buttonStyle.title + ' - Hover');
    });
    casper.then(function(){
        this.mouse.down(buttonStyle.selector);
        phantomcss.screenshot(buttonStyle.selector, buttonStyle.title + ' - Down');
    });
    curIndex++;
});

casper.test.done();
