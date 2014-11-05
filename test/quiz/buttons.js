casper.thenOpen( 'docs/buttons/test.html' );

var buttonStyles = [
    { selector: 'grey0', title: 'Button - Grey 0' },
    { selector: 'grey25', title: 'Button - Grey 25' },
    { selector: 'grey50', title: 'Button - Grey 50' },
    { selector: 'grey75', title: 'Button - Grey 75' },
    { selector: 'grey100', title: 'Button - Grey 100' },
    { selector: 'color1', title: 'Button - Color 01' },
    { selector: 'color2', title: 'Button - Color 02' },
    { selector: 'color3', title: 'Button - Color 03' },
    { selector: 'color4', title: 'Button - Color 04' },
];

var states = ["Hover", "Active", "Focus", ""];


var curIndex = 0;
var steIndex = -1;

casper.repeat(states.length, function() {
    curIndex = 0;
    casper.repeat(buttonStyles.length, function() {
        buttonStyle = buttonStyles[curIndex];
        casper.then(function(){
            name = buttonStyle.title;
            selc = ".cell-" + buttonStyle.selector;
            if(states[steIndex]) {
                name += " - " + states[steIndex];
                selc += states[steIndex].toLowerCase()
            }
            phantomcss.screenshot(selc, name);
        });
        curIndex++;
    });
    steIndex++;
});

casper.test.done();
